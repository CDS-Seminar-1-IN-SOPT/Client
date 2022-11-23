import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme, mixins } from 'styles/theme';

function FooterMenu() {
  const navigate = useNavigate();

  const goToPrevPage = () => {
    navigate(`/dateoff/:scheduleId`);
  };
  return (
    <Styled.Root>
      <Styled.ButtonContainer />
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
    background-color: ${theme.colors.white};
    width: 11.6rem;
  `,
};
