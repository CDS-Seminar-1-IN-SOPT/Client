import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme, mixins } from 'styles/theme';

function Navbar() {
  const isPicked = useState(true);

  return (
    <Styled.Root>
      <Styled.List>
        <Styled.Item isPicked={isPicked}>전체</Styled.Item>
        <Styled.Item>콘서트</Styled.Item>
        <Styled.Item>뮤지컬</Styled.Item>
        <Styled.Item>연극</Styled.Item>
        <Styled.Item>클래식</Styled.Item>
        <Styled.Item>전시회</Styled.Item>
        <Styled.Item>어린이</Styled.Item>
      </Styled.List>
    </Styled.Root>
  );
}

export default Navbar;

const Styled = {
  Root: styled.div`
    font-size: ${theme.fontSizes.body02};
    font-weight: ${theme.fontWeights.body02};
    position: absolute;
    width: 34.8rem;
    height: 3.5rem;
    left: 1.3rem;
    top: 9.4rem;
  `,
  List: styled.ul`
    ${mixins.rowFlexBox};
    padding-right: 0.5rem;
  `,
  Item: styled.li`
    ${mixins.rowFlexBox};
    width: 100%;
    height: 3.5rem;
    border-bottom: 0.1rem solid ${theme.colors.grey_04};
    ${({ isPicked }) =>
      isPicked &&
      css`
        font-weight: ${theme.fontWeights.body01};
        border-bottom: 0.3em solid ${theme.colors.black};
        height: 3.55rem;
        padding-top: 0.3rem;
      `}
  `,
};
