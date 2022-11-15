import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function PeriodSelector() {
  return (
    <Styled.Root>
      <Styled.Box>일간/ 주간</Styled.Box>
    </Styled.Root>
  );
}

export default PeriodSelector;

const Styled = {
  Root: styled.div`
    font-size: ${theme.fontSizes.body01};
    font-weight: ${theme.fontWeights.body01};
  `,
  Box: styled.div``,
};
