import React from 'react';
import useFetch from '../utils/useFetch';

export const Info = () => {
  useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=');
  return <div>INFO</div>;
};
