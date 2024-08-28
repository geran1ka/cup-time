import classNames from "classnames";
import s from "./Cart.module.scss";
import { products } from "../../products";
import { CartItem } from "../CartItem/CartItem";
import { Container } from "../Container/Container";

export const Cart = () => {
  return (
    <section className={s.cart}>
      <Container className={s.cart__container}>
        <h2 className={s.cart__title}>Корзина (6)</h2>
        <ul className={s.cart__list}>
          {products.map((item) => (
            <CartItem {...item} key={item.title} />
          ))}
        </ul>

        <div className={s.cart__totalWrapper}>
          <h3 className={s.cart__totalText}>Итого:</h3>
          <p className={s.cart__totalCount}>2200&nbsp;₽</p>
          <button className={s.cart__submit}>Заказать</button>
        </div>
      </Container>
    </section>
  );
};
