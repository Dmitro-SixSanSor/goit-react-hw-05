import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWZjMGU4MTM1NWVhZGRjYmFhNDg3NzhlMzU1OWQ1YyIsIm5iZiI6MTc0ODgwNDI2MC4xODcsInN1YiI6IjY4M2NhMmE0ZGQ2ODYyNGY0OWFkN2JmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1D-mrFWjnCIEnH8l388Sxjn3oP_KHii-tSE_g_g40Y";

export const fetchMovies = async (value) => {
  const fetchMovieSearch = await axios.get('/search/movie', {
    params: {
      query: value
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  });

  console.log("fetchMovieSearch", fetchMovieSearch.data);
  return fetchMovieSearch; 
};

export const fetchMoviePerDay = async () => {
  const fetchMovieFavDaily = await axios.get('/trending/movie/day', {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  });

  console.log("fetchMovieFavDaily", fetchMovieFavDaily);
  return fetchMovieFavDaily; 
};

export const fetchMovieById = async (movieId) => {
  const fetchMovie = await axios.get(`/movie/${movieId}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  });

  return fetchMovie; 
};


export const fetchMovieCredits = async (movieId) => {
  const fetchMovie = await axios.get(`/movie/${movieId}?append_to_response=credits`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  });

  return fetchMovie; 
};


export const fetchMovieReviews = async (movieId) => {
  const fetchImgMovie = await axios.get(`/movie/${movieId}?append_to_response=reviews`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  });

  return fetchImgMovie; 
};
