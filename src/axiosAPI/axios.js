import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=6e7eaf256e2890a0f83bf0d8fe3fe4d9'

export const trendQuery = async () => {
  try {
    const response = await axios(
      `${baseURL}trending/all/week?${KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const findFilmDetails = async (id) => {
  try {
    const response = await axios(
      `${baseURL}movie/${id}?${KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const findActors = async (id) => {
  try {
    const response = await axios(
      `${baseURL}movie/${id}/credits?${KEY}`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const findReviews = async (id) => {
  try {
    const response = await axios(
      `${baseURL}movie/${id}/credits?${KEY}`
    );
    console.log("reviews", response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};