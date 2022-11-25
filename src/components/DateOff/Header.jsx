import back from 'assets/Icons/icn_back_l.svg';
import menu from 'assets/Icons/icn_menu.svg';
import mypage from 'assets/Icons/icn_mypage.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';

function Header() {
  const navigate = useNavigate();
  return (
    <Styled.Root>
      <Styled.Button back src={back} alt="back" onClick={() => navigate('/feed')} />
      <Styled.Title>날짜 / 시간 선택</Styled.Title>
      <Styled.Button mypage src={mypage} alt="mypage" />
      <Styled.Button menu src={menu} alt="menu" />
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div`
    width: 100%;
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
  Button: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;

    ${(props) =>
      props.back &&
      css`
        left: 1.6rem;
        top: 0.8rem;
      `}
    ${(props) =>
      props.mypage &&
      css`
        left: 30.3rem;
        top: 0.8rem;
      `}
    ${(props) =>
      props.menu &&
      css`
        left: 33.1rem;
        top: 0.8rem;
      `}
  `,
};
