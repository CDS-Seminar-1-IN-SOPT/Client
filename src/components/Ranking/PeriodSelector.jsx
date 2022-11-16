import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from 'styles/theme';

function PeriodSelector() {
  return (
    <Styled.Root>
      <Styled.PeriodContainer>
        <Styled.DayPeriod>일간</Styled.DayPeriod>
        <Styled.WeekPeriod>주간</Styled.WeekPeriod>
      </Styled.PeriodContainer>
    </Styled.Root>
  );
}

export default PeriodSelector;

const Styled = {
  Root: styled.div`
    font-size: ${theme.fontSizes.body01};
    font-weight: ${theme.fontWeights.body01};
  `,
  PeriodContainer: styled.div`
    ${mixins.rowFlexBox}
    width: 34rem;
    height: 4.1rem;
    border-radius: 0.5rem;
    margin-left: 1.2rem;
  `,
  DayPeriod: styled.div`
    ${mixins.rowFlexBox}
    color: ${theme.colors.white};
    background-color: ${theme.colors.grey_01};
    border-radius: 0.5rem 0 0 0.5rem;
    width: 50%;
    height: 100%;
  `,
  WeekPeriod: styled.div`
    ${mixins.rowFlexBox}
    color: ${theme.colors.grey_02};
    background-color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.grey_04};
    border-left: none;
    border-radius: 0 0.5rem 0.5rem 0;
    width: 50%;
    height: 100%;
  `,
};
