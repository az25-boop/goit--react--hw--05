import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getFilmsTrendingAccess } from "../../js/films-api";
import Loader from "../../components/Loader/Loader";
import style from "../HomePage/HomePage.module.css";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelSearch = async () => {
    try {
      setLoading(true);
      setFilms([]);
      const dataFilms = await getFilmsTrendingAccess();
      setFilms(dataFilms);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handelSearch();
  }, []);

  return (
    <main className={style.mainSection}>
      <h1 className={style.mainTitle}>Trending today</h1>
      {loading && <Loader />}
      <MovieList filmsList={films} />
    </main>
  );
};

export default HomePage;
