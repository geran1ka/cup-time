import classNames from "classnames";
import s from "./Cart.module.scss";
import { CartItem } from "../CartItem/CartItem";
import { useCart } from "../../context/CartContext";
import { SkeletonLoader } from "../SceletonLoader/SceletonLoader";
import { useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { API_URL } from "../../const";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Cart = () => {
  const [orderStatus, setOrderSatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { cart, clearCart } = useCart();
  const { orderDetails, clearOrderDetails } = useOrder();

  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
    };

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`Ошибка при отправке заказа: ${response.statusText}`);
      }

      const data = await response.json();
      setOrderSatus("success");
      setOrderId(data.order.id);
      clearCart();
      clearOrderDetails();
    } catch (error) {
      setOrderSatus("error");
      console.error(`Ошибка: ${error}`);
    } finally {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const totalPrice = cart
    ? cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
    : 0;

  return (
    <section className={s.cart}>
      <div className={classNames("container", s.cart__container)}>
        <h2 className={s.cart__title}>Корзина ({cart ? cart.length : 0})</h2>
        <ul className={s.cart__list}>
          {cart ? (
            cart.map((item) => <CartItem {...item} key={item.title} />)
          ) : (
            <SkeletonLoader />
          )}
        </ul>

        <div className={s.cart__totalWrapper}>
          <h3 className={s.cart__totalText}>Итого:</h3>
          <p className={s.cart__totalCount}>
            {totalPrice}
            &nbsp;₽
          </p>
          <button
            className={s.cart__submit}
            onClick={handleSubmit}
            disabled={cart && cart.length ? false : true}
          >
            Заказать
          </button>
        </div>
      </div>

      <Modal
        className={s.modal}
        overlayClassName={s.modal__overlay}
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
      >
        <h2 className={s.modal__title}>
          {orderStatus === "success"
            ? `Заказ успешно отправлен! Номер вашего заказа : ${orderId}`
            : "Произошла ошибка при отправке заказа!"}
        </h2>
        <button className={s.modal__btn} onClick={closeModal}>
          Закрыть
        </button>
      </Modal>
    </section>
  );
};
