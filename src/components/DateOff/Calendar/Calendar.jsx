import { addMonths, subMonths } from 'date-fns';
import React, { useState } from 'react';
import styled from 'styled-components';

import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return (
    <Styled.Root>
      <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />

      <CalendarBody currentMonth={currentMonth} />
    </Styled.Root>
  );
}

export default Calendar;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 37.9rem;
    position: relative;
  `,
};
