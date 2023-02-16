import axios from 'axios';
import toast from 'react-hot-toast';

const baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=6e7eaf256e2890a0f83bf0d8fe3fe4d9'

export const trendQuery = async (abort) => {
  try {
    const response = await axios(
      `${baseURL}trending/all/week?${KEY}`, abort
    );
    if (response.data.results === undefined) {      
      throw new Error("Request failed!!! Probably no internet connection!");
    }
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
    return [];
  }
};

export const findFilmByKeyword = async (keyword) => {
  try {
    const response = await axios(
      `${baseURL}search/movie?${KEY}&page=1&query=${keyword}`
    );
    if (response.data.results === undefined) {      
      throw new Error("Request failed!!! Probably no internet connection!");
    }
    return response.data.results;
  } catch (error) {
    toast.error(error);
    return [];
  }
};

export const findFilmDetails = async (id) => {
  try {
    const response = await axios(
      `${baseURL}movie/${id}?${KEY}`
    );
    if (response.data === undefined) {      
      throw new Error("Request failed!!! Probably no internet connection!");
    }
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const findActors = async (id) => {
  try {
    const response = await axios(
      `${baseURL}movie/${id}/credits?${KEY}`
    );
    if (response.data.cast === undefined) {      
      throw new Error("Request failed!!! Probably no internet connection!");
    }
    return response.data.cast;
  } catch (error) {
    toast.error(error);
    return [];
  }
};

export const findReviews = async (id) => {
  try {
    const response = await axios(
      `${baseURL}movie/${id}/reviews?${KEY}`
    );
    if (response.data.results === undefined) {      
      throw new Error("Request failed!!! Probably no internet connection!");
    }
    return response.data.results;
  } catch (error) {
    toast.error(error);
    return [];
  }
};