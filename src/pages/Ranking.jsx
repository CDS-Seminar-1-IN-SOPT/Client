import Header from 'components/Ranking/Header';
import Navbar from 'components/Ranking/Navbar';
import PeriodSelector from 'components/Ranking/PeriodSelector';
import PeriodView from 'components/Ranking/PeriodView';
import ShowItemContainer from 'components/Ranking/ShowItemContainer';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Ranking() {
  const [showData, setShowData] = useState([]);
  const [pickedCategoryId, setPickedCategoryId] = useState(0);
  const [categories] = useState([
    { category: '전체', id: 0 },
    { category: '콘서트', id: 1 },
    { category: '뮤지컬', id: 2 },
    { category: '연극', id: 3 },
    { category: '클래식', id: 4 },
    { category: '전시회', id: 5 },
    { category: '어린이', id: 6 },
  ]);

  useEffect(() => {
    fetch('/show')
      .then((res) => res.json())
      .then((data) => {
        setShowData(data.showList);
      });
  }, []);

  return (
    <Styled.Root>
      <Header />
      <PeriodSelector />
      <Navbar categories={categories} pickedCategoryId={pickedCategoryId} setPickedCategoryId={setPickedCategoryId} />
      <PeriodView />
      <ShowItemContainer showData={showData} pickedCategoryId={pickedCategoryId} />
    </Styled.Root>
  );
}

export default Ranking;

const Styled = {
  Root: styled.div``,
};
