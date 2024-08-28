import s from "./Order.module.scss";
import { Form } from "../Form/Form";
import { Container } from "../Container/Container";

export const Order = () => {
  return (
    <section className={s.order}>
      <Container className={s.order__container}>
        <h2 className={s.order__title}>Доставка</h2>

        <Form className={s.order__form} />
      </Container>
    </section>
  );
};
