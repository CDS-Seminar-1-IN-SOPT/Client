import foward from 'assets/Icons/icn_foward_m.svg';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function TicketItem({ schedule }) {
  const { date } = useParams();

  return (
    schedule &&
    (date !== undefined ? (
      date === '17' ? (
        <Styled.Root>
          <Styled.TicketInfo>
            <Styled.TicketTime>
              {schedule.scheduleList[1].startAt.slice(11, 13)}시 {schedule.scheduleList[1].startAt.slice(14, 16)}분
            </Styled.TicketTime>
            <Styled.Ticketcasting>{schedule.scheduleList[1].cast}</Styled.Ticketcasting>
          </Styled.TicketInfo>
          <Styled.FowardButton src={foward} alt="foward" />
        </Styled.Root>
      ) : (
        <Styled.Root>
          <Styled.TicketInfo>
            <Styled.TicketTime>
              {schedule.scheduleList[0].startAt.slice(11, 13)}시 {schedule.scheduleList[0].startAt.slice(14, 16)}분
            </Styled.TicketTime>
            <Styled.Ticketcasting>{schedule.scheduleList[0].cast}</Styled.Ticketcasting>
          </Styled.TicketInfo>
          <Styled.FowardButton src={foward} alt="foward" />
        </Styled.Root>
      )
    ) : (
      <Styled.SelectTicket>관람 날짜를 선택해주세요</Styled.SelectTicket>
    ))
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
  SelectTicket: styled.div`
    text-align: center;
    height: 30.1rem;
    color: ${theme.colors.grey_01};
    font-weight: ${theme.fontWeights.body02};
    font-size: ${theme.fontSizes.title03};
    padding-top: 2.6rem;
  `,
  FowardButton: styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    left: 33.1rem;
    top: 2.2rem;
  `,
};
