import useAPI from 'cores/hooks/useAPI';
import { useState } from 'react';
import styled from 'styled-components';
function TicketSlider({ bannerData }) {
  // console.log(bannerData);
  return <Styled.TicketSlider>{bannerData[0].id}</Styled.TicketSlider>;
}

const Styled = {
  TicketSlider: styled.section``,
};

export default TicketSlider;
