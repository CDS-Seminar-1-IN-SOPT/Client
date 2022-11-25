import back from 'assets/Icons/icn_back_l.svg';
import menu from 'assets/Icons/icn_menu.svg';
import mypage from 'assets/Icons/icn_mypage.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate();

  const goToPrevPage = () => {
    navigate(`/ranking`);
  };

  return (
    <Styled.Root>
      <Styled.BackButton src={back} onClick={goToPrevPage} />
      <Styled.MyPage src={mypage} />
      <Styled.HamburgerIcon src={menu} />
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div`
    height: 4rem;
  `,
  BackButton: styled.img`
    cursor: pointer;
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
  HamburgerIcon: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 33.1rem;
    top: 0.8rem;
  `,
};
