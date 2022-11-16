import back from 'assets/Icons/icn_back_l.svg';
import menu from 'assets/Icons/icn_menu.svg';
import mypage from 'assets/Icons/icn_mypage.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme, mixins } from 'styles/theme';

function Header() {
  const navigate = useNavigate();

  const goToPrevPage = () => {
    navigate(`/`);
  };

  return (
    <Styled.Root>
      <Styled.BackButton src={back} onClick={goToPrevPage} />
      <Styled.Title>랭킹</Styled.Title>
      <Styled.MyPage src={mypage} />
      <Styled.Menu src={menu} />
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div`
    justify-content: space-between;
    font-size: ${theme.fontSizes.title01};
    font-weight: ${theme.fontWeights.title01};
    width: 37.5rem;
    height: 4rem;
  `,
  Title: styled.div`
    ${mixins.rowFlexBox}
    position: absolute;
    width: 3.5rem;
    height: 2.2rem;
    left: 17.2rem;
    top: 0.9rem;
  `,
  BackButton: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 1.6rem;
    top: 0.8rem;
  `,
  MyPage: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 30.3rem;
    top: 0.8rem;
  `,
  Menu: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 33.1rem;
    top: 0.8rem;
  `,
};
