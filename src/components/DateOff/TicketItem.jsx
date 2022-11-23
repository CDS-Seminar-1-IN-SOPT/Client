import foward from 'assets/Icons/icn_foward_m.svg';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function TicketItem() {
  return (
    <Styled.Root>
      <Styled.TicketInfo>
        <Styled.TicketTime>14시 00분</Styled.TicketTime>
        <Styled.Ticketcasting>출연 : 정선아, 에녹, 윤소호, 최현선, 임별, 김찬종</Styled.Ticketcasting>
      </Styled.TicketInfo>
      <Styled.FowardButton src={foward} alt="foward" />
    </Styled.Root>
  );
}

export default TicketItem;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 6.8rem;
    border-bottom: 1px solid ${theme.colors.grey_04};
    position: relative;
  `,
  TicketInfo: styled.div`
    position: absolute;
    width: 24.1rem;
    height: 4rem;
    left: 2.5rem;
    top: 1.4rem;
  `,
  TicketTime: styled.div`
    font-size: ${theme.fontSizes.title04};
    font-weight: ${theme.fontWeights.title04};
    line-height: 1.7rem;
    margin-bottom: 0.8rem;
  `,
  Ticketcasting: styled.div`
    font-size: ${theme.fontSizes.body02};
    font-weight: ${theme.fontWeights.body02};
    color: ${theme.colors.grey_02};
    line-height: 1.5rem;
  `,
  FowardButton: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 33.1rem;
    top: 2.2rem;
  `,
};
