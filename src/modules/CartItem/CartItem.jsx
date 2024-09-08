import classNames from "classnames";
import s from "./CartItem.module.scss";
import { API_URL } from "../../const";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export const CartItem = ({ className, id, title, img, price, quantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    const newQuantity = itemQuantity - 1;
    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };

  const handleEncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

  return (
    <li className={classNames(className && className, s.cartItem)}>
      <img className={s.cartItem__img} src={`${API_URL}${img}`} alt={title} />

      <div className={s.cartItem__content}>
        <h3 className={s.cartItem__title}>{title}</h3>

        <div className={s.cartItem__countWrapper}>
          <button
            className={classNames(s.cartItem__btn, s.cartItem__btn_minus)}
            onClick={handleDecrease}
          >
            <svg
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="12" height="2" />
            </svg>
          </button>
          <input
            className={s.cartItem__count}
            type="number"
            value={quantity}
            readOnly
          />
          <button
            className={classNames(s.cartItem__btn, s.cartItem__btn_plus)}
            onClick={handleEncrease}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="5.25" width="12" height="1.5" fill="#1D1C1D" />
              <rect
                x="5.25"
                y="12"
                width="12"
                height="1.5"
                transform="rotate(-90 5.25 12)"
              />
            </svg>
          </button>
        </div>
        <p className={s.cartItem__price}>{price * quantity}&nbsp;₽</p>
      </div>
    </li>
  );
};
