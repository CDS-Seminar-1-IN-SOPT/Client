import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme, mixins } from 'styles/theme';

function PeriodSelector() {
  const [selectedPeriod, setSelectedPeriod] = useState('dayPeriod');

  const selectedDayPeriod = () => {
    setSelectedPeriod('dayPeriod');
  };

  const selectedWeekPeriod = () => {
    setSelectedPeriod('weekPeriod');
  };

  return (
    <Styled.Root>
      <Styled.PeriodContainer>
        <Styled.DayPeriod selectedPeriod={selectedPeriod} onClick={selectedDayPeriod}>
          일간
        </Styled.DayPeriod>
        <Styled.WeekPeriod selectedPeriod={selectedPeriod} onClick={selectedWeekPeriod}>
          주간
        </Styled.WeekPeriod>
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
    position: absolute;
    width: 34rem;
    height: 4.1rem;
    left: 2rem;
    top: 4.5rem;
    border-radius: 0.5rem;
  `,
  DayPeriod: styled.div`
    ${mixins.rowFlexBox}
    border-radius: 0.5rem 0 0 0.5rem;
    width: 50%;
    height: 100%;
    ${(props) =>
      props.selectedPeriod === 'dayPeriod' &&
      css`
        background-color: ${theme.colors.grey_01};
        color: ${theme.colors.white};
      `}
    ${(props) =>
      props.selectedPeriod === 'weekPeriod' &&
      css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.grey_02};
        border: 0.1rem solid ${theme.colors.grey_04};
      `}
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
    ${(props) =>
      props.selectedPeriod === 'dayPeriod' &&
      css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.grey_02};
      `}
    ${(props) =>
      props.selectedPeriod === 'weekPeriod' &&
      css`
        background-color: ${theme.colors.grey_01};
        color: ${theme.colors.white};
      `}
  `,
};
