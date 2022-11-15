import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <Styled.Root>
      <h1>네비게이션바 컴포넌트 입니다.</h1>
    </Styled.Root>
  );
}

export default Navbar;

const Styled = {
  Root: styled.div``,
};
