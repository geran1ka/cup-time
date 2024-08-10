import classNames from "classnames";
import s from "./Form.module.scss";

export const Form = ({ className }) => {
  return (
    <form className={classNames(className && className, s.form)}>
      <input
        className={classNames(s.form__input)}
        name="name"
        type="text"
        placeholder="Имя"
      />
      <input
        className={classNames(s.form__input)}
        name="phone"
        type="number"
        placeholder="Телефон"
      />
      <input
        className={classNames(s.form__input, s.form__input_adress)}
        name="address"
        type="text"
        placeholder="Адрес"
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
            defaultChecked
          />
          <span>Наличные</span>
        </label>
      </fieldset>
    </form>
  );
};
