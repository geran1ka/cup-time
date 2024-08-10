import classNames from "classnames";
import s from "./Order.module.scss";
import { Form } from "../Form/Form";

export const Order = () => {
  return (
    <section className={s.order}>
      <div className={classNames("container", s.order__container)}>
        <h2 className={s.order__title}>Доставка</h2>

        <Form className={s.order__form} />
      </div>
    </section>
  );
};
