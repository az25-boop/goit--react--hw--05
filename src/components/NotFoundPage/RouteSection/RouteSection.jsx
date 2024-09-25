import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const HomePage = lazy(() => import("../../HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../../components/MovieReviews/MovieReviews")
);

const RouteSection = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSection;
