import linkButton from 'assets/Icons/icn_foward_m.svg';
import styled from 'styled-components';
function AngelTicket({ angelData }) {
  return (
    <Styled.AngelTicket>
      <Styled.AngelInfo>
        <Styled.AngelInfoText>
          <Styled.AngelInfoTitle>엔젤 티켓</Styled.AngelInfoTitle>
          <Styled.AngelInfoSub>3일 4시간 45분</Styled.AngelInfoSub>
        </Styled.AngelInfoText>
        <Styled.AngelLink src={linkButton} />
      </Styled.AngelInfo>
      <Styled.AngelInfoText>
        <Styled.AngelSub>매주 달라지는 최저가 할인 놓치지 마세요!</Styled.AngelSub>
      </Styled.AngelInfoText>

      <Styled.AngelTicketList>
        {angelData.map((v, index) => (
          <Styled.AngelTicketBox key={v.title}>
            <Styled.AngelTicketImg src={v.imageURL} />
            <Styled.AngelTicektSub>{v.title}</Styled.AngelTicektSub>
            <Styled.AngelTicketSale>{v.discountRate}%</Styled.AngelTicketSale>
          </Styled.AngelTicketBox>
        ))}
      </Styled.AngelTicketList>
    </Styled.AngelTicket>
  );
}

const Styled = {
  AngelTicket: styled.section``,
  AngelInfo: styled.div`
    padding: 0 1.6rem 0 1.6rem;
    display: flex;
    justify-content: space-between;
    margin-top: 3.2rem;
  `,
  AngelInfoText: styled.div`
    margin-top: 0.8rem;
  `,
  AngelInfoTitle: styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  `,
  AngelInfoSub: styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-left: 0.8rem;
  `,
  AngelSub: styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-top: 0.8rem;
    padding-left: 1.6rem;
  `,
  AngelLink: styled.img``,
  AngelTicketList: styled.div`
    width: 100%;
    padding: 0 1.75rem 0 1.75rem;
    display: flex;
    margin-top: 2rem;
  `,
  AngelTicketBox: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
  `,
  AngelTicketSale: styled.div`
    width: 3.2rem;
    height: 1.6rem;
    background: #ff54b0;
    border-radius: 3px;

    font-weight: 500;
    font-size: 1rem;
    line-height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    position: relative;
    bottom: 14.5rem;
    right: 0.3rem;
  `,
  AngelTicketImg: styled.img`
    width: 10.8rem;
    height: 13.9rem;
    margin-right: 0.8rem;
  `,

  AngelTicektSub: styled.div`
    width: 10.8rem;
    height: 1.2rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.2rem;
    display: block;

    margin-top: 0.8rem;
    overflow: hidden;

    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    text-overflow: ellipsis !important;
  `,
};

export default AngelTicket;
