import classNames from "classnames";
import s from "./Hero.module.scss";
import { Container } from "../Container/Container";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <Container className={s.hero__container}>
        <div className={s.hero__wrapper}>
          <h1 className={s.hero__title}>Попробуй новый вкус Арабики</h1>

          <a className={s.hero__link} href="#">
            Перейти к кофе
          </a>
        </div>
      </Container>
    </section>
  );
};
