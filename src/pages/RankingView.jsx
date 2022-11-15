import Header from 'components/Ranking/Header';
import React from 'react';
import styled from 'styled-components';

function Ranking() {
  return (
    <Styled.Root>
      <Header />
    </Styled.Root>
  );
}

export default Ranking;

const Styled = {
  Root: styled.div``,
};
