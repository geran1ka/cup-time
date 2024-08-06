import classNames from "classnames";
import s from "./Card.module.scss";
export const Card = ({ title, image, price }) => {
  return (
    <article className={classNames(s.products__card, s.card)}>
      <img className={s.card__img} src={image} alt={title} />

      <div className={s.card__content}>
        <h3 className={s.card__title}>{title}</h3>

        <p className={s.card__price}>{price} ₽</p>
      </div>
    </article>
  );
};
