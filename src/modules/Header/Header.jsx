import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.scss";
import classNames from "classnames";
import { useCart } from "../../context/CartContext";
import { useProducts } from "../../context/ProductContext";
import { useState } from "react";
import { Container } from "../Container/Container";

export const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { categories } = useProducts();

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get(
      "category"
    );

    return currentCategory === category ? "active" : "";
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <Link className={s.header__logoLink} to="/">
          <img
            className={s.header__logo}
            src="img/logo.svg"
            alt="Логотип CUP TIME"
          />
        </Link>

        <nav
          className={classNames(
            s.header__nav,
            isMenuOpen ? s.header__nav_active : ""
          )}
        >
          <ul className={s.header__menu}>
            {Object.entries(categories).map(([key, value]) => (
              <li key={key} className={s.header__menuItem}>
                <Link
                  className={classNames(
                    s.header__menuLink,
                    getActiveClass(key) === "active" &&
                      s.header__menuLink_active
                  )}
                  to={`/products?category=${key}`}
                  onClick={closeMenu}
                >
                  {value}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={s.header__closeBtn}
            onClick={closeMenu}
            aria-label="Закрыть меню"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7.28174"
                y="7.07532"
                width="20"
                height="1"
                transform="rotate(45 7.28174 7.07532)"
              />
              <rect
                x="6.5752"
                y="21.2173"
                width="20"
                height="1"
                transform="rotate(-45 6.5752 21.2173)"
              />
            </svg>
          </button>
        </nav>
        <div className={s.header__control}>
          <Link
            className={s.header__cartLink}
            aria-label="Открыть корзину"
            to="/cart"
          >
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.2867 10.9533C22.505 10.09 21.3267 9.5883 19.6934 9.4133V8.52663C19.6934 6.9283 19.0167 5.3883 17.8267 4.31497C16.625 3.2183 15.0617 2.70497 13.44 2.85663C10.6517 3.12497 8.3067 5.81996 8.3067 8.73663V9.4133C6.67336 9.5883 5.49503 10.09 4.71336 10.9533C3.5817 12.2133 3.6167 13.8933 3.74503 15.06L4.5617 21.5583C4.8067 23.8333 5.72836 26.1666 10.745 26.1666H17.255C22.2717 26.1666 23.1934 23.8333 23.4384 21.57L24.255 15.0483C24.3834 13.8933 24.4067 12.2133 23.2867 10.9533ZM13.6034 4.4783C14.77 4.3733 15.8784 4.73497 16.7417 5.51663C17.5934 6.28663 18.0717 7.3833 18.0717 8.52663V9.3433H9.92836V8.73663C9.92836 6.65997 11.6434 4.66497 13.6034 4.4783ZM9.82336 15.8416H9.8117C9.17003 15.8416 8.64503 15.3166 8.64503 14.675C8.64503 14.0333 9.17003 13.5083 9.8117 13.5083C10.465 13.5083 10.99 14.0333 10.99 14.675C10.99 15.3166 10.465 15.8416 9.82336 15.8416ZM17.99 15.8416H17.9784C17.3367 15.8416 16.8117 15.3166 16.8117 14.675C16.8117 14.0333 17.3367 13.5083 17.9784 13.5083C18.6317 13.5083 19.1567 14.0333 19.1567 14.675C19.1567 15.3166 18.6317 15.8416 17.99 15.8416Z" />
              <circle cx="18" cy="14.5" r="2" />
              <circle cx="10" cy="14.5" r="2" />
            </svg>
            <span className={s.header__cartText}>{cart ? cart.length : 0}</span>
          </Link>

          <button
            className={s.header__burger}
            aria-label="Открыть меню"
            onClick={openMenu}
          >
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="colorCurrent"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="9.5" width="20" height="1" />
              <rect x="4" y="14.5" width="20" height="1" />
              <rect x="4" y="19.5" width="20" height="1" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};
