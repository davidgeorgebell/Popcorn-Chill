import React from 'react';
import useFetch from '../utils/useFetch';
import InfoList from './InfoList';

const InfoContainer = ({ url }) => {
  const info = useFetch(url);
  return (
    <div>
      {' '}
      <InfoList info={info} />{' '}
    </div>
  );
};
export default InfoContainer;
