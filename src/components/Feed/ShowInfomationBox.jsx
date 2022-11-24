import coupon_off from 'assets/buttons/btn_coupon_off.svg';
import coupon_on from 'assets/buttons/btn_coupon_on.svg';
import exclusiveFlag from 'assets/Icons/ic_only.svg';
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
          공연기간 {showDetail.showStartAt.slice(0, 10)}~{showDetail.showEndAt.slice(0, 10)}
        </Styled.ShowPeriod>
        <Styled.ShowRunningTime>관람시간 {showDetail.runningTime}</Styled.ShowRunningTime>
        <Styled.ShowDate>공연일시 {showDetail.showTimeDiscription}</Styled.ShowDate>
        <Styled.ShowPlace>공연장소 {showDetail.place}</Styled.ShowPlace>
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
    height: 15rem;
  `,
  ShowPeriod: styled.p``,
  ShowRunningTime: styled.p``,
  ShowPlace: styled.p``,
  ShowDate: styled.p``,
  CouponWrapper: styled.div`
    ${mixins.rowFlexBox}
  `,
  Coupon: styled.img``,
};
