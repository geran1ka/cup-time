import s from "./Products.module.scss";
import { Card } from "../Card/Card";
import classNames from "classnames";

const products = [
  {
    image: "img/photo-2.jpg",
    title: "Кокосовая матча",
    price: 390,
  },
  {
    image: "img/photo-1.jpg",
    title: "Зеленый индонезийский чай",
    price: 340,
  },
  {
    image: "img/photo.jpg",
    title: "Черный чай из Эфиопии",
    price: 380,
  },
  {
    image: "img/photo-5.jpg",
    title: "Черный чай из Калифорнии",
    price: 360,
  },
  {
    image: "img/photo-4.jpg",
    title: "Органическая веганская матчаа",
    price: 400,
  },
  {
    image: "img/photo-3.jpg",
    title: "Чай черный Лакандона",
    price: 390,
  },
];

export const Products = () => {
  return (
    <section className={s.products}>
      <div className={classNames("container", s.products__container)}>
        <h2 className={s.products__title}>Чай</h2>

        <ul className={s.products__list}>
          {products.map((item) => (
            <li className={s.products__item} key={item.title}>
              <Card {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
