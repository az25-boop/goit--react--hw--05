import { format } from "date-fns";
import style from "../MovieReviewsItem/MovieReviewsItem.module.css";

const MovieReviewsItem = ({
  dataReviews: {
    author,
    author_details: { username },
    content,
    created_at,
  },
}) => {
  const formatDate = (date) => {
    return format(new Date(date), "MMMM dd yyyy HH:mm:ss");
  };
  return (
    <>
      <h2 className={style.reviewItemTitle}>{author}</h2>
      <p className={style.reviewItemUserName}>
        <span className={style.reviewItemSpan}>Username</span>: {username}
      </p>
      <p className={style.reviewItemDate}>{formatDate(created_at)}</p>
      <p className={style.reviewItemContent}>{content}</p>
    </>
  );
};

export default MovieReviewsItem;
