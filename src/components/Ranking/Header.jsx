import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Styled.Root>
      <h1>여긴 헤더입니다.</h1>
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div``,
};
