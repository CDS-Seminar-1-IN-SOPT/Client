import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme, mixins } from 'styles/theme';

function PeriodView() {
  // const [showData, setShowData] = useState([]);

  // useEffect(() => {
  //   fetch('/show')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setShowData(data);
  //     });
  // }, []);

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
