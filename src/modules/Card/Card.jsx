import classNames from "classnames";
import s from "./Card.module.scss";
import { API_URL } from "../../const";
import { useState } from "react";
import { CardModal } from "../CardModal/CardModal";

export const Card = ({ title, img, price, additional, id }) => {
  const data = {
    title,
    img,
    price,
    additional,
    id,
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <a
        className={s.card__link}
        href="#"
        aria-label={`Открыть модальное окно для ${data.title}`}
        onClick={openModal}
      >
        <article className={classNames(s.card)}>
          <img className={s.card__img} src={`${API_URL}${img}`} alt={title} />

          <div className={s.card__content}>
            <h3 className={s.card__title}>{title}</h3>

            <p className={s.card__price}>{price} ₽</p>
          </div>
        </article>
      </a>
      <CardModal isOpen={modalIsOpen} onRequestClose={closeModal} data={data} />
    </>
  );
};
