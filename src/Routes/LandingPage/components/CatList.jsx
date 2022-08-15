import React, { useState } from 'react';
import { useQuery } from 'react-query';

import getCats from '../../../Services/fetchApi';
import LoadingState from './LoadingState';
import './catList.css';

const View = () => {
  const [selectedCatIdx, setSelectedCatIdx] = useState(null);
  // useQuery here
  const { data: catListData, isLoading } = useQuery('catList', getCats)

  // Loading state here
  if(isLoading){
    return <div>loading...</div>;
  }

  return (
    <div className="padding">
      <h1>List Cat</h1>
      <div className='name-list'>
        {
          catListData.map((cat, idx) => (
            <li className='list-cat' key={idx} onClick={() => {setSelectedCatIdx(idx)}}>
              {cat.name}
            </li>
          ))
        }
      </div>
      {
        selectedCatIdx!==null && (
          <img src={catListData[selectedCatIdx].image.url} alt={catListData[selectedCatIdx].name}/>
        )
      }
    </div>
  )
};
export default View;
