import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme, mixins } from 'styles/theme';

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
        <Styled.ShowItem key={show.id}>
          <Styled.ShowImage src={show.imageURL} alt="공연이미지" />
          <Styled.ShowContents>
            <Styled.ShowTitle>{show.title}</Styled.ShowTitle>
            <Styled.ShowInfomation>
              {show.isExclusive && <Styled.ExclusiveFlag>단독</Styled.ExclusiveFlag>}
              <Styled.ShowPeriod>{`${show.showStartAt.slice(0, 10)}~${show.showEndAt.slice(0, 10)}`}</Styled.ShowPeriod>
              <Styled.ShowMemberRecruit>회원 모집</Styled.ShowMemberRecruit>
            </Styled.ShowInfomation>
          </Styled.ShowContents>
        </Styled.ShowItem>
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
    left: 0.1rem;
    top: 16.5rem;
    margin: 0 auto;
  `,
  ShowItem: styled.div`
    ${mixins.rowFlexBox};
    position: relative;
    width: 37.5rem;
    height: 17rem;
    border-width: 30%;
    & :before {
      content: '';
      position: absolute;
      left: 1.3rem;
      bottom: 0;
      width: 90%;
      height: 0.01rem;
      border-bottom: 0.1rem solid rgba(51, 51, 51, 0.05);
    }
  `,
  ShowImage: styled.img`
    width: 11.1rem;
    height: 14.5rem;
    background-color: ${theme.colors.grey_03};
    border-radius: 0.5rem;
    color: ${theme.colors.white};
    margin-left: 0.6rem;
  `,
  ShowContents: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23rem;
    height: 14.5rem;
    padding-left: 1.3rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  `,
  ShowTitle: styled.h1`
    font-size: ${theme.fontSizes.title03};
    font-weight: ${theme.fontWeights.title03};
    width: 21rem;
  `,
  ExclusiveFlag: styled.div`
    ${mixins.rowFlexBox}
    color: ${theme.colors.white};
    background-color: ${theme.colors.purple};
    width: 2.4rem;
    height: 1.5rem;
    border-radius: 0.15rem;
  `,
  ShowInfomation: styled.div``,
  RankingFlag: styled.div``,
  ShowPeriod: styled.p`
    font-size: ${theme.fontSizes.body02};
    font-weight: ${theme.fontWeights.body02};
    color: ${theme.colors.grey_03};
    margin-top: 0.5rem;
  `,
  ShowMemberRecruit: styled.p`
    font-size: ${theme.fontSizes.body03};
    font-weight: ${theme.fontWeights.body03};
    color: ${theme.colors.grey_03};
    margin-top: 0.1rem;
  `,
};
