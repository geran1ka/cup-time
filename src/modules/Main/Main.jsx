import s from "./Main.module.scss";
import { Hero } from "../Hero/Hero";
import { Products } from "../Products/Products";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Order } from "../Order/Order";

export const Main = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Order />
            </>
          }
        />
      </Routes>
    </main>
  );
};
