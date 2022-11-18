import linkButton from 'assets/Icons/icn_foward_m.svg';
import styled from 'styled-components';
function RealtimeRank({ ticketData }) {
  return (
    <Styled.RealtimeRank>
      <Styled.RealtimeInfo>
        <Styled.RealtimeText>실시간 티켓 랭킹</Styled.RealtimeText>
        <Styled.RealtimeLink src={linkButton} />
      </Styled.RealtimeInfo>
      <Styled.RealtimeRankList>
        <Styled.RankDiv>
          <Styled.RealtimeImg src={ticketData[0].imageURL} />
          <Styled.RealtimeRankBox>1</Styled.RealtimeRankBox>
        </Styled.RankDiv>
        <Styled.RankDiv>
          <Styled.RealtimeImg src={ticketData[1].imageURL} />
          <Styled.RealtimeRankBox>2</Styled.RealtimeRankBox>
        </Styled.RankDiv>
        <Styled.RankDiv>
          <Styled.RealtimeImg src={ticketData[2].imageURL} />
          <Styled.RealtimeRankBox>3</Styled.RealtimeRankBox>
        </Styled.RankDiv>
      </Styled.RealtimeRankList>
    </Styled.RealtimeRank>
  );
}

const Styled = {
  RealtimeRank: styled.section``,
  RealtimeRankList: styled.div``,
  RealtimeInfo: styled.div``,
  RealtimeText: styled.span``,
  RealtimeLink: styled.img``,
  RankDiv: styled.div``,
  RealtimeImg: styled.img``,
  RealtimeRankBox: styled.div``,
};

export default RealtimeRank;
