import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme, mixins } from 'styles/theme';

function ShowItemContainer({ showData, pickedCategoryId }) {
  const navigate = useNavigate();

  const filter = showData.filter((a) => a.id < 6).sort((a, b) => a.id - b.id);
  const filterArray = [
    {
      id: 1,
      imageURL:
        'https://sopt-cds-bucket.s3.amazonaws.com/%E3%85%85%E3%84%B7%E3%84%B4%E3%85%85/KakaoTalk_20221125_200223273_05.jpg',
      isExclusive: true,
      showEndAt: '2022-11-18T10:28:05.000Z',
      showStartAt: '2022-11-17T10:28:02.000Z',
      showType: 5,
      title: '기울어진 사람들',
    },
    ...filter,
  ];

  filterArray[3].showType = 4;

  const goToFeed = () => {
    navigate(`/feed`);
  };

  return (
    <Styled.Root>
      {filterArray.map((show) => (
        <Styled.ShowItem key={show.id} showType={show.showType} pickedCategoryId={pickedCategoryId} onClick={goToFeed}>
          <Styled.ShowImageContainer>
            <Styled.ShowImage src={show.imageURL} alt="공연이미지" />

            {pickedCategoryId !== 0 ? (
              <Styled.RankingFlag ranking={show.id} pickedCategoryId={pickedCategoryId}>
                1
              </Styled.RankingFlag>
            ) : (
              <Styled.RankingFlag ranking={show.id} pickedCategoryId={pickedCategoryId}>
                {show.id}
              </Styled.RankingFlag>
            )}
          </Styled.ShowImageContainer>
          <Styled.ShowContents>
            <Styled.ShowTitle>{show.title}</Styled.ShowTitle>
            <Styled.ShowInfomation>
              {show.isExclusive && <Styled.ExclusiveFlag>단독</Styled.ExclusiveFlag>}
              <Styled.ShowPeriod>{`${show.showStartAt.slice(0, 10)}~${show.showEndAt.slice(0, 10)}`}</Styled.ShowPeriod>
              <Styled.ShowMemberRecruit>광림 아트센터</Styled.ShowMemberRecruit>
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
    left: 0.4rem;
    top: 16.5rem;
    cursor: pointer;
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
      border-bottom: 0.1rem solid rgba(51, 51, 51, 0.04);
    }
    ${({ pickedCategoryId, showType }) => {
      if (pickedCategoryId !== showType && pickedCategoryId !== 0) {
        return css`
          display: none;
        `;
      }
      return;
    }}
  `,
  ShowImageContainer: styled.div`
    position: relative;
    width: 11.1rem;
    height: 14.5rem;
    border-radius: 0.5rem;
    color: ${theme.colors.white};
    margin-left: 0.6rem;
  `,
  ShowImage: styled.img`
    width: 10.8rem;
    height: 14.2rem;
    border-radius: 0.5rem;
  `,
  ShowContents: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23rem;
    height: 14.5rem;
    padding-left: 1.4rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  `,
  ShowTitle: styled.h1`
    font-size: ${theme.fontSizes.title03};
    font-weight: ${theme.fontWeights.title03};
    width: 20rem;
  `,
  ShowInfomation: styled.div``,
  ExclusiveFlag: styled.div`
    ${mixins.rowFlexBox}
    color: ${theme.colors.white};
    background-color: ${theme.colors.purple};
    width: 2.4rem;
    height: 1.5rem;
    border-radius: 0.15rem;
  `,
  RankingFlag: styled.div`
    ${mixins.rowFlexBox}
    position: absolute;
    width: 2.16rem;
    height: 2.16rem;
    ${({ ranking, pickedCategoryId }) => {
      if (ranking < 4 || pickedCategoryId !== 0) {
        return css`
          font-size: ${theme.fontSizes.title03};
          font-weight: ${theme.fontWeights.title03};
          background-color: ${theme.colors.grey_01};
          top: -0.2rem;
          left: -0.2rem;
        `;
      }
      return css`
        top: 0;
        left: 0;
        background-color: #858585;
        border-radius: 0.5rem;
      `;
    }}
  `,
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
