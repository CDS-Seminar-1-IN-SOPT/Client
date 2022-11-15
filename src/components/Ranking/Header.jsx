import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Header() {
  return (
    <Styled.Root>
      <Styled.Title>랭킹</Styled.Title>
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div`
    font-size: ${theme.fontSizes.title01};
    font-weight: ${theme.fontWeights.title01};
  `,
  Title: styled.div``,
};
