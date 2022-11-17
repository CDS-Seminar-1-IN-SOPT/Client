import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from 'styles/theme';

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
    ${mixins.rowFlexBox}
    position: absolute;
    left: 2.1rem;
    top: 13.7rem;
  `,
  Period: styled.p`
    font-size: ${theme.fontSizes.body03};
    font-weight: ${theme.fontWeights.body03};
    color: ${theme.colors.grey_03};
  `,
};
