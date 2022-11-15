import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Navbar() {
  return (
    <Styled.Root>
      <Styled.List>전체뮤지컬연극클래식어린이등등등</Styled.List>
    </Styled.Root>
  );
}

export default Navbar;

const Styled = {
  Root: styled.div`
    font-size: ${theme.fontSizes.body02};
    font-weight: ${theme.fontWeights.body02};
  `,
  List: styled.ul``,
};
