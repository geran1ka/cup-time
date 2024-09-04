import s from "./Products.module.scss";
import { Card } from "../Card/Card";
import classNames from "classnames";
import { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import { useSearchParams } from "react-router-dom";
import { SkeletonLoader } from "../SceletonLoader/SceletonLoader";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory, categories } = useProducts();
  const category = searchParams.get("category");

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  const categoryTitle = categories[category] || "Товары";

  return (
    <section className={s.products}>
      <div className={classNames("container", s.products__container)}>
        <h2 className={s.products__title}>{categoryTitle}</h2>

        <ul className={s.products__list}>
          {products.length ? (
            products.map((item) => (
              <li className={s.products__item} key={item.id}>
                <Card {...item} />
              </li>
            ))
          ) : (
            <SkeletonLoader />
          )}
        </ul>
      </div>
    </section>
  );
};
