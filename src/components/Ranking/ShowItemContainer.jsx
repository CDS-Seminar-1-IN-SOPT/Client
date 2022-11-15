import React from 'react';
import styled from 'styled-components';

function ShowItemContainer() {
  return (
    <Styled.Root>
      <h1>아이템 목록 컴포넌트 입니다.</h1>
    </Styled.Root>
  );
}

export default ShowItemContainer;

const Styled = {
  Root: styled.div``,
};
