import classNames from "classnames";
import s from "./Hero.module.scss";
import { Link, useSearchParams } from "react-router-dom";

export const Hero = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <section className={s.hero}>
      <div className={classNames("container", s.hero__container)}>
        <div className={s.hero__wrapper}>
          <h1 className={s.hero__title}>Попробуй новый вкус Арабики</h1>
          {category !== "coffee" ? (
            <Link className={s.hero__link} to="/products?category=coffee">
              Перейти к кофе
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};
