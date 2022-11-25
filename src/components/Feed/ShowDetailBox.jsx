import green from 'assets/Icons/ic_green.svg';
import orange from 'assets/Icons/ic_orange.svg';
import pink from 'assets/Icons/ic_pink.svg';
import purple from 'assets/Icons/ic_purple.svg';
import { useThemeObserver } from 'cores/hooks/useThemeObserver';
import React, { useState } from 'react';
import { Link } from 'react-scroll/modules';
import styled, { css } from 'styled-components';
import { mixins, theme } from 'styles/theme';

function ShowDetailBox({ castScheduleImageURL }) {
  const menu = [
    { title: '상세정보', id: 1 },
    { title: '캐스팅일정', id: 2 },
    { title: '공연이미지', id: 3 },
    { title: '공지사항', id: 4 },
    { title: '리뷰', id: 5 },
  ];

  const selectMenu = (e) => {
    if (e.target.innerText === '상세정보') {
      setNavNumber(1);
    }
    if (e.target.innerText === '캐스팅일정') {
      setNavNumber(2);
    }
    if (e.target.innerText === '공연이미지') {
      setNavNumber(3);
    }
    if (e.target.innerText === '공지사항') {
      setNavNumber(4);
    }
    if (e.target.innerText === '리뷰') {
      setNavNumber(5);
    }
  };

  const [navNumber, setNavNumber] = useState(1);

  const [priceRef] = useThemeObserver(setNavNumber, 1);
  const [castingRef] = useThemeObserver(setNavNumber, 2);
  const [imageRef] = useThemeObserver(setNavNumber, 3);
  const [noticeRef] = useThemeObserver(setNavNumber, 4);
  const [reviewRef] = useThemeObserver(setNavNumber, 5);

  return (
    <Styled.Root>
      <Styled.NavBarWrapper>
        <Styled.NavBar>
          <Styled.NavBarItem border={navNumber === 1}>
            <Link to="1" onClick={selectMenu}>
              상세정보
            </Link>
          </Styled.NavBarItem>
          <Styled.NavBarItem border={navNumber === 2}>
            <Link to="2" onClick={selectMenu}>
              캐스팅일정
            </Link>
          </Styled.NavBarItem>
          <Styled.NavBarItem border={navNumber === 3}>
            <Link to="3" onClick={selectMenu}>
              공연이미지
            </Link>
          </Styled.NavBarItem>
          <Styled.NavBarItem border={navNumber === 4}>
            <Link to="4" onClick={selectMenu}>
              공지사항
            </Link>
          </Styled.NavBarItem>
          <Styled.NavBarItem border={navNumber === 5}>
            <Link to="5" onClick={selectMenu}>
              리뷰
            </Link>
          </Styled.NavBarItem>
        </Styled.NavBar>
      </Styled.NavBarWrapper>
      <Styled.DetailInfoContainer id="1">
        <Styled.TicketPriceContainer isRef={priceRef}>
          <Styled.TicketPriceTitle>티켓등급별 가격</Styled.TicketPriceTitle>
          <Styled.TicketPriceList>
            <Styled.TicketPriceItem>
              <Styled.PriceColorPicker src={orange} />
              <Styled.Seat>VIP석</Styled.Seat>
              <Styled.Price>150,000원</Styled.Price>
            </Styled.TicketPriceItem>
            <Styled.TicketPriceItem>
              <Styled.PriceColorPicker src={purple} />
              <Styled.Seat>R석</Styled.Seat>
              <Styled.Price>120,000원</Styled.Price>
            </Styled.TicketPriceItem>
            <Styled.TicketPriceItem>
              <Styled.PriceColorPicker src={pink} />
              <Styled.Seat>S석</Styled.Seat>
              <Styled.Price>80,000원</Styled.Price>
            </Styled.TicketPriceItem>
            <Styled.TicketPriceItem>
              <Styled.PriceColorPicker src={green} />
              <Styled.Seat>A석</Styled.Seat>
              <Styled.Price>70,000원</Styled.Price>
            </Styled.TicketPriceItem>
          </Styled.TicketPriceList>
        </Styled.TicketPriceContainer>
      </Styled.DetailInfoContainer>
      <Styled.CastingContainer isRef={castingRef} id="2">
        <Styled.Title>캐스팅일정</Styled.Title>
        <Styled.CastingImage src={castScheduleImageURL} alt="공연" />
      </Styled.CastingContainer>
      <Styled.CastingContainer isRef={imageRef} id="3">
        <Styled.Title>공연이미지</Styled.Title>
        <Styled.CastingImage src={castScheduleImageURL} alt="공연" />
      </Styled.CastingContainer>
      <Styled.CastingContainer isRef={noticeRef} id="4">
        <Styled.Title>공지사항</Styled.Title>
        <Styled.CastingImage src={castScheduleImageURL} alt="공연" />
      </Styled.CastingContainer>
      <Styled.CastingContainer isRef={reviewRef} id="5">
        <Styled.Title>리뷰</Styled.Title>
        <Styled.CastingImage src={castScheduleImageURL} alt="공연" />
        <Styled.CastingImage src={castScheduleImageURL} alt="공연" />
      </Styled.CastingContainer>
    </Styled.Root>
  );
}

export default ShowDetailBox;

const Styled = {
  Root: styled.div``,
  NavBarWrapper: styled.div`
    ${mixins.rowFlexBox};
    width: 100%;
    height: 5rem;
    z-index: 2;
    color: ${theme.colors.grey_03};
    position: sticky;
    top: -0.5rem;
  `,
  NavBar: styled.ul`
    ${mixins.rowFlexBox};
    font-size: ${theme.fontSizes.title04};
    font-weight: ${theme.fontWeights.title04};
    width: 35.5rem;
    height: 4rem;
    background-color: ${theme.colors.white};
  `,
  NavBarItem: styled.li`
    ${mixins.rowFlexBox};
    height: 100%;
    padding: 0rem 1rem;
    border-bottom: 0.1rem solid ${theme.colors.grey_04};
    cursor: pointer;
    ${({ border }) => {
      if (border) {
        return css`
          color: black;
          font-weight: 800;
          border-bottom: 0.3em solid ${theme.colors.black};
        `;
      }
    }}
  `,
  DetailInfoContainer: styled.div`
    padding: 1.8rem;
    z-index: 1;
  `,
  TicketPriceContainer: styled.div`
    width: 100%;
    height: 100%;
  `,
  TicketPriceTitle: styled.h1`
    font-size: ${theme.fontSizes.title03};
    font-weight: ${theme.fontWeights.title02};
    color: ${theme.colors.grey_01};
    margin-bottom: 0.8rem;
  `,
  TicketPriceList: styled.ul`
    padding: 0.8rem;
  `,
  TicketPriceItem: styled.li`
    ${mixins.rowFlexBox};
    justify-content: flex-start;
    margin-bottom: 0.7rem;
  `,
  PriceColorPicker: styled.img`
    margin-right: 1.3rem;
  `,
  Seat: styled.div`
    width: 3.1rem;
    font-size: ${theme.fontSizes.body02};
    font-weight: ${theme.fontWeights.body02};
    color: ${theme.colors.grey_01};
    margin-right: 1.3rem;
  `,
  Price: styled.div`
    width: 5.9rem;
    text-align: right;
    font-size: ${theme.fontSizes.body02};
    font-weight: ${theme.fontWeights.body02};
    color: ${theme.colors.grey_01};
  `,
  CastingContainer: styled.div`
    padding: 0 1.8rem 0 1.8rem;
    margin-bottom: 7rem;
  `,
  Title: styled.h1`
    font-size: ${theme.fontSizes.title03};
    font-weight: ${theme.fontWeights.title02};
    color: ${theme.colors.grey_01};
    margin-bottom: 1.2rem;
  `,
  CastingImage: styled.img`
    width: 34.7rem;
    height: 50.9rem;
  `,
};
