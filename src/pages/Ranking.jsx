import Header from 'components/Ranking/Header';
import Navbar from 'components/Ranking/Navbar';
import PeriodSelector from 'components/Ranking/PeriodSelector';
import PeriodView from 'components/Ranking/PeriodView';
import ShowItemContainer from 'components/Ranking/ShowItemContainer';
import useAPI from 'cores/hooks/useAPI';
import React, { useState } from 'react';

function Ranking() {
  const showData = useAPI('http://52.3.174.121:3000/show').data;

  const [pickedCategoryId, setPickedCategoryId] = useState(0);
  const categories = [
    { category: '전체', id: 0 },
    { category: '콘서트', id: 1 },
    { category: '뮤지컬', id: 2 },
    { category: '연극', id: 3 },
    { category: '클래식', id: 4 },
    { category: '전시회', id: 5 },
    { category: '어린이', id: 6 },
  ];

  return (
    <>
      {showData === undefined || showData === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <PeriodSelector />
          <Navbar
            categories={categories}
            pickedCategoryId={pickedCategoryId}
            setPickedCategoryId={setPickedCategoryId}
          />
          <PeriodView />
          <ShowItemContainer showData={showData.data.showList} pickedCategoryId={pickedCategoryId} />
        </>
      )}
    </>
  );
}

export default Ranking;
