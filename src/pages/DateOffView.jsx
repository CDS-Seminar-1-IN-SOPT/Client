import Header from 'components/DateOff/Header';
import TicketList from 'components/DateOff/TicketList';
import React from 'react';
import styled from 'styled-components';

function DateOffView() {
  return (
    <Styled.Root>
      <Header />
      <TicketList />
    </Styled.Root>
  );
}

export default DateOffView;

const Styled = {
  Root: styled.div`
    position: relative;
    width: 37.5rem;
  `,
};
