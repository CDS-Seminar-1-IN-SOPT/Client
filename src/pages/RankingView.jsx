import Header from 'components/Ranking/Header';
import Navbar from 'components/Ranking/Navbar';
import PeriodSelector from 'components/Ranking/PeriodSelector';
import PeriodView from 'components/Ranking/PeriodView';
import ShowItemContainer from 'components/Ranking/ShowItemContainer';
import React from 'react';
import styled from 'styled-components';

function Ranking() {
  return (
    <Styled.Root>
      <Header />
      <PeriodSelector />
      <Navbar />
      <PeriodView />
      <ShowItemContainer />
    </Styled.Root>
  );
}

export default Ranking;

const Styled = {
  Root: styled.div``,
};
