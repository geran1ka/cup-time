import s from "./Main.module.scss";
import { Hero } from "../Hero/Hero";
import { Products } from "../Products/Products";

export const Main = () => {
  return (
    <main className={s.main}>
      <Hero />

      <Products />
    </main>
  );
};
