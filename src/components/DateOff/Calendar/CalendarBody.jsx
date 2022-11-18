import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth } from 'date-fns';
import React from 'react';
import styled, { css } from 'styled-components';
import { mixins, theme } from 'styles/theme';

const DATES = ['월', '화', '수', '목', '금'];

function CalendarBody({ currentMonth }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      days.push(
        <div
          className={`${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : format(currentMonth, 'M') !== format(day, 'M')
              ? 'not-valid'
              : 'valid'
          }`}
          key={day}>
          <span className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid' : ''}>
            {formattedDate}
          </span>
        </div>,
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>,
    );
    days = [];
  }

  return (
    <>
      <Styled.Root>
        <Styled.Table>
          <Styled.Thead>
            <Styled.Tr>
              <Styled.Td sun>일</Styled.Td>
              {DATES.map((date, idx) => (
                <Styled.Td dates key={idx}>
                  {date}
                </Styled.Td>
              ))}
              <Styled.Td sat>토</Styled.Td>
            </Styled.Tr>
          </Styled.Thead>
          <Styled.Tbody>
            {rows.map((row, idx) => (
              <Styled.Tr key={idx}>
                {row.props.children.map((r, idx) => (
                  <Styled.Td key={idx} disabled={r.props.className === 'disabled'}>
                    {r.props.children.props.children}
                  </Styled.Td>
                ))}
              </Styled.Tr>
            ))}
          </Styled.Tbody>
        </Styled.Table>
      </Styled.Root>
      <Styled.TicketingBlock />
      <Styled.TicketingClear>예매가능</Styled.TicketingClear>
      <Styled.TicketingBlock selected />
      <Styled.TicketingClear selectedText>선택</Styled.TicketingClear>
    </>
  );
}

export default CalendarBody;

const Styled = {
  Root: styled.div``,
  DateItem: styled.div`
    width: 3.5rem;
    ${mixins.rowFlexBox}
    margin-right: 1rem;
    font-size: ${theme.fontSizes.title03};
    font-weight: ${theme.fontWeights.title03};
    color: ${theme.colors.grey_01};
  `,
  Table: styled.table`
    border-collapse: collapse;
    width: 100%;
    height: 25.8rem;
    position: relative;
  `,
  Thead: styled.thead``,
  Tr: styled.tr``,
  Tbody: styled.tbody``,
  Td: styled.td`
    padding: 0.3rem;
    width: 12rem;
    height: 1rem;
    text-align: center;
    font-weight: ${theme.fontWeights.title03};
    font-size: ${theme.fontSizes.title03};
    color: ${theme.colors.grey_01};
    vertical-align: middle;

    ${(props) =>
      props.disabled &&
      css`
        color: ${theme.colors.grey_02};
      `}

    ${(props) =>
      props.dates &&
      css`
        color: ${theme.colors.grey_02};
      `}
    ${(props) =>
      props.sun &&
      css`
        color: ${theme.colors.red};
      `}
    ${(props) =>
      props.sat &&
      css`
        color: ${theme.colors.purple};
      `}
  `,
  TicketingBlock: styled.div`
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: ${theme.colors.grey_01};
    border-radius: 0.2rem;
    left: 26.6rem;
    top: 35rem;

    ${(props) =>
      props.selected &&
      css`
        background-color: ${theme.colors.pink};
        left: 32.1rem;
      `}
  `,
  TicketingClear: styled.span`
    position: absolute;
    height: 1.2rem;
    font-size: ${theme.fontSizes.body03};
    font-weight: ${theme.fontWeights.title03};
    color: ${theme.colors.grey_01};
    left: 28rem;
    top: 35rem;

    ${(props) =>
      props.selectedText &&
      css`
        left: 33.5rem;
      `}
  `,
};
