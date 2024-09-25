import axios from "axios";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWI4NmViYWIzMzMxNDdhYTA2YjlhODk5YjY0YzYxNCIsInN1YiI6IjY1ZTc2YjQ4MzFkMDliMDE2MmUzMWE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AB-5VH5rmU095UcQzHVjMm3vM3utfCAE_YAytC-tzY0";

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
