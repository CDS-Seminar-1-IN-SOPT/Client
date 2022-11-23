import React from 'react';
import styled from 'styled-components';

function ShowInfomationBox({ showDetail }) {
  return <Styled.Root>{showDetail.title}</Styled.Root>;
}

export default ShowInfomationBox;

const Styled = {
  Root: styled.div``,
};
