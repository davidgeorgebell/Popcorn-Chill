import { useState, useEffect } from 'react';
import { fetchData } from '../utils/useFetch';

const MainWrapper = () => {
  const [apiData, setApiData] = useState({ results: [] });
  const [pageNumber, setPageNumber] = useState(1);

  const { page, results, total_pages } = apiData;

  const pageLimit = page === 0 || page < total_pages;

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    fetchData(pageNumber).then(newData =>
      setApiData({
        ...newData,
        results: [...apiData.results, ...newData.results]
      })
    );
  }, [pageNumber]);

  return (
    <div>
      {results.map(item => {
        return <h2>{item.title}</h2>;
      })}
      {apiData.page > 0 ? (
        <button onClick={() => loadMore()}>Push</button>
      ) : null}
    </div>
  );
};
export default MainWrapper;
