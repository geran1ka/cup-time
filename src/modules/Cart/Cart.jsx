import classNames from "classnames";
import s from "./Cart.module.scss";
import { products } from "../../products";
import { CartItem } from "../CartItem/CartItem";
import { useCart } from "../../context/CartContext";
import { SkeletonLoader } from "../SceletonLoader/SceletonLoader";

export const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart
    ? cart.reduce((acc, item) => {
        console.log("item: ", item);

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
          <button className={s.cart__submit}>Заказать</button>
        </div>
      </div>
    </section>
  );
};
