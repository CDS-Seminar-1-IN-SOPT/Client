import Header from 'components/DateOff/Header';
import React from 'react';
import styled from 'styled-components';

function DateOffView() {
  return (
    <Styled.Root>
      <Header />
    </Styled.Root>
  );
}

export default DateOffView;

const Styled = {
  Root: styled.div`
    position: relative;
  `,
};
