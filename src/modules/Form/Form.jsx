import classNames from "classnames";
import s from "./Form.module.scss";
import { useOrder } from "../../context/OrderContext";

export const Form = ({ className }) => {
  const { orderDetails, updateOrderDetails } = useOrder();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateOrderDetails(name, value);
  };

  return (
    <form className={classNames(className && className, s.form)}>
      <input
        className={classNames(s.form__input)}
        name="name"
        type="text"
        placeholder="Имя"
        value={orderDetails.name}
        onChange={handleChange}
      />
      <input
        className={classNames(s.form__input)}
        name="phone"
        type="number"
        placeholder="Телефон"
        value={orderDetails.phone}
        onChange={handleChange}
      />
      <input
        className={classNames(s.form__input, s.form__input_adress)}
        name="address"
        type="text"
        placeholder="Адрес"
        value={orderDetails.address}
        onChange={handleChange}
      />

      <fieldset className={s.form__fieldset}>
        <h3 className={s.form__legend}>Оплата:</h3>
        <label className={s.form__label}>
          <input
            className={s.form__radio}
            type="radio"
            name="payment"
            id="card"
            value="card"
            checked={orderDetails.payment === "card"}
            onChange={handleChange}
          />
          <span>Картой</span>
        </label>
        <label className={s.form__label}>
          <input
            className={s.form__radio}
            type="radio"
            name="payment"
            id="cash"
            value="cash"
            checked={orderDetails.payment === "cash"}
            onChange={handleChange}
          />
          <span>Наличные</span>
        </label>
      </fieldset>
    </form>
  );
};
