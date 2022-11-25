import Calender from 'components/DateOff/Calendar/Calendar';
import Header from 'components/DateOff/Header';
import TicketList from 'components/DateOff/TicketList';
import { getSchedule } from 'cores/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function DateOffView() {
  const { scheduleId } = useParams();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const handleGetSchedule = async () => {
      const response = await getSchedule(scheduleId);
      setSchedule(response);
    };

    handleGetSchedule();
  }, []);

  return (
    <Styled.Root>
      <Header />
      <Calender schedule={schedule} />
      <TicketList schedule={schedule} />
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
