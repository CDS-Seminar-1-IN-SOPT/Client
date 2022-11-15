import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function PeriodView() {
  return (
    <Styled.Root>
      <Styled.Period>2022. 11. 05 ~ 현재 16:30까지</Styled.Period>
    </Styled.Root>
  );
}

export default PeriodView;

const Styled = {
  Root: styled.div`
    font-size: ${theme.fontSizes.body03};
    font-weight: ${theme.fontWeights.body03};
  `,
  Period: styled.p``,
};
