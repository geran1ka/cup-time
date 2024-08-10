import classNames from "classnames";
import s from "./CartItem.module.scss";

export const CartItem = ({ className, title, image, price }) => {
  return (
    <li className={classNames(className && className, s.cartItem)}>
      <img className={s.cartItem__img} src={image} alt={title} />

      <div className={s.cartItem__content}>
        <h3 className={s.cartItem__title}>{title}</h3>

        <div className={s.cartItem__countWrapper}>
          <button
            className={classNames(s.cartItem__btn, s.cartItem__btn_minus)}
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
          <input className={s.cartItem__count} type="number" value={1} />
          <button className={classNames(s.cartItem__btn, s.cartItem__btn_plus)}>
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
        <p className={s.cartItem__price}>{price}&nbsp;₽</p>
      </div>
    </li>
  );
};
