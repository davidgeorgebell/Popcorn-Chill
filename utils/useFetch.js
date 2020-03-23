const API_KEY = process.env.customKey;
const language = '&language=en';
const region = '&region=gb';
// const pageNumber = 1;

export const fetchData = async pageNumber => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}${language}&page=${pageNumber}${region}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
fetchData();
