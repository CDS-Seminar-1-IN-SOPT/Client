import React from 'react';
import styled from 'styled-components';

function ShowDetailBox({ castScheduleImageURL }) {
  return (
    <>
      <Styled.Root src={castScheduleImageURL} />
    </>
  );
}

export default ShowDetailBox;

const Styled = {
  Root: styled.img``,
};
