import { Link, useLocation } from "react-router-dom";
import style from "./NotFoundPage.module.css";
import notFoundPage from "../../assets/img/not-found-page.png";

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <section className={style.containerNotFound}>
      <div className={style.notFound}>
        <h1 className={style.notFoundTitle}>404</h1>

        <img
          className={style.notFoundImg}
          src={notFoundPage}
          alt="not found page"
        />
        <h2 className={style.notFoundTitleInform}>Page not found</h2>

        <p className={style.notFoundMessage}>
          We`re sorry, the page you requesterd could not be found
        </p>
        <Link to={backLinkHref}>
          <button className={style.notFoundBtn}>Go to homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
