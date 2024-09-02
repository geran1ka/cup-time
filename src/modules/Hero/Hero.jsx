import classNames from "classnames";
import s from "./Hero.module.scss";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={classNames("container", s.hero__container)}>
        <div className={s.hero__wrapper}>
          <h1 className={s.hero__title}>Попробуй новый вкус Арабики</h1>

          <Link className={s.hero__link} to="/products?category=coffee">
            Перейти к кофе
          </Link>
        </div>
      </div>
    </section>
  );
};
