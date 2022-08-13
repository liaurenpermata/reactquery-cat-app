import React from 'react';
import { useQuery } from 'react-query';

import getCats from '../../../Services/fetchApi';
import LoadingState from './LoadingState';
import './catList.css';

const View = () => {
  // useQuery here

  // Loading state here

  return <div className="padding">Hello Felines!</div>;
};
export default View;
