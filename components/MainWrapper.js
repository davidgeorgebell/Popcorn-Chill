import { useState } from 'react';
import useFetch from '../utils/useFetch';

const MainWrapper = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [content, setContent] = useState({ page: 0, results: [] });

  const { response, error } = useFetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=',
    pageNumber
  );
  if (error) return <p>Error...</p>;

  const { page, results, total_pages } = content;

  // const pageLimit = page === 0 || page < total_pages;

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <button onClick={() => loadMore()}>press</button>
    </div>
  );
};
export default MainWrapper;
