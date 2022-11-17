import Header from 'components/Ranking/Header';
import Navbar from 'components/Ranking/Navbar';
import PeriodSelector from 'components/Ranking/PeriodSelector';
import PeriodView from 'components/Ranking/PeriodView';
import ShowItemContainer from 'components/Ranking/ShowItemContainer';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Ranking() {
  const [showData, setShowData] = useState([]);

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
      <Navbar showData={showData} setShowData={setShowData} />
      <PeriodView />
      <ShowItemContainer showData={showData} />
    </Styled.Root>
  );
}

export default Ranking;

const Styled = {
  Root: styled.div``,
};
