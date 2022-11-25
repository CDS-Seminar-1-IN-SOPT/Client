import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import TicketItem from './TicketItem';

function TicketList({ schedule }) {
  return (
    <Styled.Root>
      <Styled.TicketBlock>
        <Styled.TicketTitle>뮤지컬 [소크라테스 패러독스]</Styled.TicketTitle>
      </Styled.TicketBlock>
      <TicketItem schedule={schedule} />
    </Styled.Root>
  );
}

export default TicketList;

const Styled = {
  Root: styled.div`
    width: 100%;
    border-top: 1px solid ${theme.colors.grey_04};
  `,
  TicketBlock: styled.div`
    width: 100%;
    height: 5.9rem;
    position: relative;
    border-bottom: 1px solid ${theme.colors.grey_04};
  `,
  TicketTitle: styled.span`
    position: absolute;
    font-size: ${theme.fontSizes.title02};
    font-weight: ${theme.fontWeights.title02};
    line-height: 2.2rem;
    height: 2.2rem;
    left: 1.6rem;
    top: 1.9rem;
  `,
};
