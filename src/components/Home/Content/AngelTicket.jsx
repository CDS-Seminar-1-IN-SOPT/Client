import styled from 'styled-components';

function AngelTicket() {
  return (
    <Styled.AngelTicket>
      <Styled.AngelInfo>
        <Styled.AngelInfoText>
          <Styled.AngelInfoTitle>엔젤 티켓</Styled.AngelInfoTitle>
          <Styled.AngelTicektSub>3일 4시간 45분</Styled.AngelTicektSub>
        </Styled.AngelInfoText>
      </Styled.AngelInfo>
      <Styled.AngelInfoText>매주 달라지는 최저가 할인 놓치지 마세요!</Styled.AngelInfoText>

      <Styled.AngelTicketList>
        <Styled.AngelTicketBox>
          <Styled.AngelTicketImg />
          <Styled.AngelTicektSub>뮤지컬_여기는 중앙정렬</Styled.AngelTicektSub>
          <Styled.AngelTicketSale>30%</Styled.AngelTicketSale>
        </Styled.AngelTicketBox>

        <Styled.AngelTicketBox>
          <Styled.AngelTicketImg />
          <Styled.AngelTicektSub>뮤지컬_여기는 중앙정렬</Styled.AngelTicektSub>
          <Styled.AngelTicketSale>30%</Styled.AngelTicketSale>
        </Styled.AngelTicketBox>

        <Styled.AngelTicketBox>
          <Styled.AngelTicketImg />
          <Styled.AngelTicektSub>뮤지컬_여기는 중앙정렬</Styled.AngelTicektSub>
          <Styled.AngelTicketSale>30%</Styled.AngelTicketSale>
        </Styled.AngelTicketBox>
      </Styled.AngelTicketList>
    </Styled.AngelTicket>
  );
}

const Styled = {
  AngelTicket: styled.section``,
  AngelInfo: styled.div``,
  AngelInfoText: styled.div``,
  AngelInfoTitle: styled.span``,
  AngelInfoSub: styled.span``,
  AngelLink: styled.img``,
  AngelTicketList: styled.div``,
  AngelTicketBox: styled.div``,
  AngelTicketSale: styled.div``,
  AngelTicketImg: styled.img``,
  AngelTicektSub: styled.div``,
};

export default AngelTicket;
