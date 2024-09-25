import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmsDetails } from "../../js/films-api";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import LoaderMoreInform from "../Loader/LoaderMoreInform";
import style from "../MovieCast/MovieCast.module.css";

const MovieCast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setLoading(true);
        setCredits([]);
        const dataCredits = await getFilmsDetails(id, "/credits");
        setCredits(dataCredits.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    handelClick();
  }, [id]);
  return (
    <section className={style.castSection}>
      {loading && <LoaderMoreInform />}
      {credits && (
        <ul className={style.castList}>
          {credits.map((cast) => (
            <li className={style.castItem} key={cast.id}>
              <MovieCastItem dataCast={cast} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieCast;
