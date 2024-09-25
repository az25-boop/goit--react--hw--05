import { NavLink, useLocation } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const location = useLocation();

  const buildLinkClass = (to) => {
    return clsx(style.navLink, location.pathname === to && style.navLinkActive);
  };

  return (
    <header className={style.container}>
      <nav className={style.headerNav}>
        <NavLink className={buildLinkClass("/")} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass("/movies")} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
