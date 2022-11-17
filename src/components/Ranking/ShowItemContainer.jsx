import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ShowItemContainer() {
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
      {showData.map((show) => (
        <Styled.ShowItem key={show.id}>{show.id}</Styled.ShowItem>
      ))}
    </Styled.Root>
  );
}

export default ShowItemContainer;

const Styled = {
  Root: styled.section`
    position: absolute;
    width: 37.5rem;
    height: 17rem;
    left: 1.5rem;
    top: 15.5rem;
  `,
  ShowItem: styled.div``,
  ShowImage: styled.img``,
  ShowTitle: styled.h1``,
  ExclusiveFlag: styled.div``,
  RankingFlage: styled.div``,
  ShowPeriod: styled.p``,
  ShowMemberRecruit: styled.p``,
};
