import prev from 'assets/Icons/icn_back_m.svg';
import next from 'assets/Icons/icn_foward_m.svg';
import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import { mixins, theme } from 'styles/theme';

function CalendarHeader({ currentMonth, prevMonth, nextMonth }) {
  return (
    <Styled.Root>
      <Styled.PrevButton>
        <Styled.PrevImage src={prev} alt="prev" onClick={prevMonth} />
      </Styled.PrevButton>
      <Styled.NowDate>
        <Styled.NowYear>{format(currentMonth, 'M')}월</Styled.NowYear>
        <Styled.NowMonth>
          <Styled.NowMonth>{format(currentMonth, 'yyyy')}</Styled.NowMonth>
        </Styled.NowMonth>
      </Styled.NowDate>
      <Styled.NextButton>
        <Styled.NextImage src={next} alt="next" onClick={nextMonth} />
      </Styled.NextButton>
    </Styled.Root>
  );
}

export default CalendarHeader;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 8.3rem;
    position: relative;
  `,
  NowDate: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 2.3rem;
    left: 17rem;
  `,
  NowYear: styled.span`
    font-weight: ${theme.fontWeights.title01};
    font-size: ${theme.fontSizes.title01};
    color: ${theme.colors.grey_01};
    height: 2.2rem;
  `,
  NowMonth: styled.span`
    font-weight: ${theme.fontWeights.title03};
    font-size: ${theme.fontSizes.body01};
    color: ${theme.colors.grey_02};
    height: 1.5rem;
  `,
  PrevButton: styled.button`
    position: absolute;
    width: 3.2rem;
    height: 3.2rem;
    top: 2.6rem;
    left: 8.7rem;
    ${mixins.rowFlexBox}
    border-radius: 0.8rem;
    border: 0.945914px solid ${theme.colors.grey_04};
    background-color: ${theme.colors.white};
  `,
  PrevImage: styled.img`
    color: ${theme.colors.grey_01};
  `,
  NextButton: styled.button`
    position: absolute;
    width: 3.2rem;
    height: 3.2rem;
    top: 2.6rem;
    right: 8.8rem;
    ${mixins.rowFlexBox}
    border-radius: 0.8rem;
    border: 0.945914px solid ${theme.colors.grey_04};
    background-color: ${theme.colors.white};
  `,
  NextImage: styled.img`
    color: ${theme.colors.grey_01};
  `,
};
