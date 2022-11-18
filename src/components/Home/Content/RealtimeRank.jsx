import styled from 'styled-components';

function RealtimeRank() {
  return (
    <Styled.RealtimeRank>
      <Styled.RealtimeInfo>
        <Styled.RealtimeText>실간 티켓 랭킹</Styled.RealtimeText>
        <Styled.RealtimeLink />
      </Styled.RealtimeInfo>
      <Styled.RankDiv>
        <Styled.RealtimeImg />
        <Styled.RealtimeRankBox>1</Styled.RealtimeRankBox>
      </Styled.RankDiv>
      <Styled.RankDiv>
        <Styled.RealtimeImg />
        <Styled.RealtimeRankBox>2</Styled.RealtimeRankBox>
      </Styled.RankDiv>
      <Styled.RankDiv>
        <Styled.RealtimeImg />
        <Styled.RealtimeRankBox>3</Styled.RealtimeRankBox>
      </Styled.RankDiv>
    </Styled.RealtimeRank>
  );
}

const Styled = {
  RealtimeRank: styled.section``,
  RealtimeInfo: styled.div``,
  RealtimeText: styled.span``,
  RealtimeLink: styled.img``,
  RankDiv: styled.div``,
  RealtimeImg: styled.img``,
  RealtimeRankBox: styled.div``,
};

export default RealtimeRank;
