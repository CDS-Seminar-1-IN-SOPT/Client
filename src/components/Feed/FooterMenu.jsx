import heart_off from 'assets/Icons/ic_heart_off.svg';
import heart_on from 'assets/Icons/ic_heart_on.svg';
import share from 'assets/Icons/ic_Share.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme, mixins } from 'styles/theme';

function FooterMenu() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const goToPrevPage = () => {
    navigate(`/dateoff/:scheduleId`);
  };

  const handleLike = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Styled.Root>
      <Styled.ButtonContainer>
        <Styled.LikeMenuContainer onClick={handleLike}>
          {isClicked ? <Styled.LikeIcon src={heart_on} /> : <Styled.LikeIcon src={heart_off} />}
          <Styled.LikeCount isClicked={isClicked}>{isClicked ? 124 : 123}</Styled.LikeCount>
        </Styled.LikeMenuContainer>
        <Styled.ShareIcon src={share} alt="공유하기" />
      </Styled.ButtonContainer>
      <Styled.TicketingButton onClick={goToPrevPage}>예매하기</Styled.TicketingButton>
    </Styled.Root>
  );
}

export default FooterMenu;

const Styled = {
  Root: styled.div`
    ${mixins.rowFlexBox};
    height: 6.4rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  `,
  TicketingButton: styled.button`
    ${mixins.rowFlexBox};
    font-size: ${theme.fontSizes.title01};
    font-weight: ${theme.fontWeights.title01};
    color: ${theme.colors.white};
    background-color: ${theme.colors.grey_01};
    width: 25.9rem;
    height: 6.4rem;
    outline: 0;
    border: 0;
  `,
  ButtonContainer: styled.div`
    ${mixins.rowFlexBox};
    background-color: ${theme.colors.white};
    width: 11.6rem;
  `,
  ShareIcon: styled.img`
    width: 3.6rem;
    height: 3.6rem;
  `,
  LikeMenuContainer: styled.div`
    position: relative;
    height: 6.4rem;
    cursor: pointer;
  `,
  LikeIcon: styled.img`
    width: 3.6rem;
    height: 3.6rem;
    margin-top: 1.5rem;
  `,
  LikeCount: styled.p`
    position: absolute;
    width: 1.8rem;
    height: 1.2rem;
    left: 0.9rem;
    top: 2.7rem;
    z-index: 999;
    color: black;
    ${({ isClicked }) => {
      if (isClicked) {
        return `
          color: ${theme.colors.white};
        `;
      }
    }}
  `,
};
