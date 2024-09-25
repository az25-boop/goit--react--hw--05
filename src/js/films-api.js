import axios from "axios";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDlmZDM3OWFlYTAxYjdjMTg1MTk3NTIyMDIyZWFmZCIsIm5iZiI6MTcyNzA5Nzc1OC4wNzg3OTYsInN1YiI6IjY2ZjE0Nzc0YTgyYjAwNTcwMzI2ODU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fqiYuQg8jLiuqFuD-K3fKbnC6uhKuwMW1BkX40fw88";

export const getFilmsTrendingAccess = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilmsDetails = async (id, codeWord = "") => {
  const url = `https://api.themoviedb.org/3/movie/${id}${codeWord}?language=en-US`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);

    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilmsSearch = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};
