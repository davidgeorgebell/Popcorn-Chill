import { useEffect, useState } from 'react';

const API_KEY = process.env.customKey;
const language = '&language=en';
const region = '&region=gb';
const pageNumber = 1;

const useFetch = url => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}${API_KEY}${language}&page=${pageNumber}${region}`
        );
        const data = await response.json();
        console.log(data);
        setResponse(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};
export default useFetch;
