import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmsDetails } from "../../js/films-api";
import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";
import LoaderMoreInform from "../Loader/LoaderMoreInform";
import style from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setLoading(true);
        setReviews([]);
        const dataCredits = await getFilmsDetails(id, "/reviews");
        setReviews(dataCredits.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    handelClick();
  }, [id]);
  return (
    <section>
      {loading && <LoaderMoreInform />}
      {!loading && reviews !== null && reviews.length === 0 && (
        <p
          className={style.reviewNotFound}
        >{`We don't have any reviews for this movie`}</p>
      )}
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li className={style.reviewItem} key={review.id}>
              <MovieReviewsItem dataReviews={review} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieReviews;
