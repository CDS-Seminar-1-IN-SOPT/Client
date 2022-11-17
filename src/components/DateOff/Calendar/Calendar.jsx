import React from 'react';
import styled from 'styled-components';

import CalendarHeader from './CalendarHeader';

function Calendar() {
  return (
    <Styled.Root>
      <CalendarHeader />
    </Styled.Root>
  );
}

export default Calendar;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 37.9rem;
  `,
};
