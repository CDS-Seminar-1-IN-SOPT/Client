import back from 'assets/Icons/icn_back_l.svg';
import menu from 'assets/Icons/icn_menu.svg';
import mypage from 'assets/Icons/icn_mypage.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Header() {
  const navigate = useNavigate();
  return (
    <Styled.Root>
      <Styled.BackButton src={back} alt="back" onClick={() => navigate(-1)} />
      <Styled.Title>날짜 / 시간 선택</Styled.Title>
      <Styled.MypageButton src={mypage} alt="mypage" />
      <Styled.MenuButton src={menu} alt="menu" />
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div`
    width: 37.5rem;
    height: 4rem;
  `,
  Title: styled.div`
    position: absolute;
    font-size: ${theme.fontSizes.title02};
    font-weight: ${theme.fontWeights.title01};
    color: ${theme.colors.grey_01};
    width: 10.7rem;
    height: 2.2rem;
    left: 13.4rem;
    top: 0.9rem;
    line-height: 2.2rem;
  `,
  BackButton: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 1.6rem;
    top: 0.8rem;
  `,
  MypageButton: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 30.3rem;
    top: 0.8rem;
  `,
  MenuButton: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 33.1rem;
    top: 0.8rem;
  `,
};
