import coupon_off from 'assets/buttons/btn_coupon_off.svg';
import coupon_on from 'assets/buttons/btn_coupon_on.svg';
import exclusiveFlag from 'assets/Icons/ic_only.svg';
import fowardFlag from 'assets/Icons/icn_foward_s.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, mixins } from 'styles/theme';

function ShowInfomationBox({ showDetail }) {
  const [issued, setIssued] = useState(false);

  const getCoupon = () => {
    setIssued(!issued);
  };

  return (
    <Styled.Root>
      <Styled.ShowTitleContaner>
        <Styled.ShowImage src={showDetail.imageURL} />
        <Styled.ShowTitleBox>
          <Styled.ShowTitle>{showDetail.title}</Styled.ShowTitle>
          <Styled.ExclusiveFlag src={exclusiveFlag} />
          <Styled.ShowGanre>뮤지컬 | {showDetail.ageLimit}</Styled.ShowGanre>
        </Styled.ShowTitleBox>
      </Styled.ShowTitleContaner>
      <Styled.ShowInfoContainer>
        <Styled.ShowPeriod>
          <Styled.ShowPeriodTitle>공연기간</Styled.ShowPeriodTitle>
          <Styled.ShowPeriodDescription>
            {showDetail.showStartAt.slice(0, 10)}~{showDetail.showEndAt.slice(0, 10)}
          </Styled.ShowPeriodDescription>
        </Styled.ShowPeriod>
        <Styled.ShowRunningTime>
          <Styled.ShowRunningTimeTitle>관람시간</Styled.ShowRunningTimeTitle>
          <Styled.ShowRunningTimeDescription>{showDetail.runningTime}</Styled.ShowRunningTimeDescription>
        </Styled.ShowRunningTime>
        <Styled.ShowDate>
          <Styled.ShowDateTitle>공연일시</Styled.ShowDateTitle>
          <Styled.ShowDateDescription>{showDetail.showTimeDiscription}</Styled.ShowDateDescription>
        </Styled.ShowDate>
        <Styled.ShowPlace>
          <Styled.ShowPlaceTitle>공연장소</Styled.ShowPlaceTitle>
          <Styled.ShowPlaceDescriptionContainer>
            <Styled.ShowPlaceDescription href="http://www.klarts.kr/use">
              광림아트센터 BBCH홀
            </Styled.ShowPlaceDescription>
            <Styled.FowardFlag src={fowardFlag} />
          </Styled.ShowPlaceDescriptionContainer>
        </Styled.ShowPlace>
      </Styled.ShowInfoContainer>
      <Styled.CouponWrapper>
        {issued ? <Styled.Coupon src={coupon_on} /> : <Styled.Coupon src={coupon_off} onClick={getCoupon} />}
      </Styled.CouponWrapper>
    </Styled.Root>
  );
}

export default ShowInfomationBox;

const Styled = {
  Root: styled.div`
    width: 37.5rem;
  `,
  ShowTitleContaner: styled.div`
    position: relative;
    width: 100%;
    height: 15.7rem;
    background: rgba(51, 51, 51, 0.04);
  `,
  ShowTitleBox: styled.div`
    position: relative;
    width: 18rem;
  `,

  ShowTitle: styled.h1`
    color: ${theme.colors.grey_01};
    font-size: ${theme.fontSizes.title02};
    font-weight: ${theme.fontWeights.title02};
    position: absolute;
    width: 20.7rem;
    height: 3.4rem;
    left: 14.2rem;
    top: 1.1rem;
  `,
  ShowImage: styled.img`
    position: absolute;
    width: 10.8rem;
    height: 14.2rem;
    left: 2.2rem;
    top: 0.7rem;
    border-radius: 0.5rem;
  `,
  ExclusiveFlag: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 14.2rem;
    top: 10rem;
  `,
  ShowGanre: styled.p`
    color: ${theme.colors.grey_03};
    font-size: ${theme.fontSizes.body03};
    font-weight: ${theme.fontWeights.body03};
    position: absolute;
    width: 7.3rem;
    height: 1.2rem;
    left: 14.2rem;
    top: 13rem;
  `,
  ShowInfoContainer: styled.div`
    font-size: ${theme.fontSizes.body02};
    font-weight: ${theme.fontWeights.body02};
    color: ${theme.colors.grey_03};
    width: 100%;
    height: 12.5rem;
    padding-left: 2.2rem;
    padding-top: 0.5rem;
  `,
  ShowPeriod: styled.p`
    display: flex;
    margin-bottom: 1rem;
  `,
  ShowPeriodTitle: styled.div`
    margin-right: 1.5rem;
  `,
  ShowPeriodDescription: styled.div``,
  ShowRunningTime: styled.p`
    display: flex;
    margin-bottom: 1rem;
  `,
  ShowRunningTimeTitle: styled.div`
    margin-right: 1.5rem;
  `,
  ShowRunningTimeDescription: styled.div``,
  ShowPlace: styled.p`
    display: flex;
    margin-bottom: 1rem;
  `,
  ShowPlaceTitle: styled.div`
    margin-right: 1.5rem;
  `,
  ShowPlaceDescriptionContainer: styled.div`
    position: relative;
    color: ${theme.colors.grey_01};
    display: flex;
  `,
  ShowPlaceDescription: styled.a`
    cursor: pointer;
    color: ${theme.colors.grey_01};
    text-decoration: none;
  `,
  ShowDate: styled.div`
    display: flex;
    margin-bottom: 1.5rem;
  `,
  ShowDateTitle: styled.div`
    margin-right: 1.5rem;
  `,
  ShowDateDescription: styled.div`
    width: 15.8rem;
  `,
  FowardFlag: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    bottom: -0.6rem;
    left: 10.8rem;
  `,
  CouponWrapper: styled.div`
    ${mixins.rowFlexBox}
  `,
  Coupon: styled.img``,
};
