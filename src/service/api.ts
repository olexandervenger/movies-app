import axios, { AxiosResponse } from "axios";

export const MOVIES_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export const getMoviesByPage = async (page: number): Promise<AxiosResponse> => {
  return await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIES_API_KEY}&page=${page}`);
} 