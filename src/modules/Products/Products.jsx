import s from "./Products.module.scss";
import { Card } from "../Card/Card";
import { products } from "../../products";
import { Container } from "../Container/Container";

export const Products = () => {
  return (
    <section className={s.products}>
      <Container className={s.products__container}>
        <h2 className={s.products__title}>Чай</h2>

        <ul className={s.products__list}>
          {products.map((item) => (
            <li className={s.products__item} key={item.title}>
              <Card {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
