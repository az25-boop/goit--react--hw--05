import { Link, useLocation } from "react-router-dom";

import MovieItem from "../MovieItem/MovieItem";
import style from "./MovieList.module.css";

const MovieList = ({ filmsList }) => {
  const location = useLocation();
  return (
    <div className={style.containerList}>
      <ul className={style.filmsList}>
        {filmsList.map((film) => (
          <li key={film.id} className={style.filmItem}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <MovieItem dataFilm={film} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
