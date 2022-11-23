import coupon_off from 'assets/buttons/btn_coupon_off.svg';
import coupon_on from 'assets/buttons/btn_coupon_on.svg';
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
      <Styled.ShowTitleContaner />
      <Styled.ShowInfoContainer>ㅎㅎㅎ</Styled.ShowInfoContainer>
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
  ShowTitleContaner: styled.div``,
  ShowTitle: styled.h1``,
  ShowInfoContainer: styled.div``,
  CouponWrapper: styled.div`
    ${mixins.rowFlexBox}
  `,
  Coupon: styled.img``,
};
