import linkButton from 'assets/Icons/icn_foward_m.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
function RealtimeRank({ ticketData }) {
  const navigate = useNavigate();
  const viewRanking = () => {
    navigate('/ranking');
  };
  return (
    <Styled.RealtimeRank>
      <Styled.RealtimeInfo>
        <Styled.RealtimeText>실시간 티켓 랭킹</Styled.RealtimeText>
        <Styled.RealtimeLink src={linkButton} onClick={() => viewRanking()} />
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

  RealtimeInfo: styled.div`
    width: 100%;
    padding: 0 1.6rem 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4.4rem;
  `,
  RealtimeText: styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  `,
  RealtimeRankList: styled.div`
    width: 100%;
    padding: 0 1.75rem 0 1.75rem;
    margin-top: 2.7rem;
    display: flex;
    max-height: 14.2rem;
  `,
  RealtimeLink: styled.img`
    cursor: pointer;
  `,
  RankDiv: styled.div`
    max-height: 14.2rem;
  `,
  RealtimeImg: styled.img`
    width: 10.8rem;
    height: 14.2rem;
    margin-right: 0.8rem;
  `,
  RealtimeRankBox: styled.div`
    width: 2.4rem;
    height: 2.4rem;
    background: #333333;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 17px;
    font-style: normal;
    position: relative;
    bottom: 14.7rem;
    right: 0.2rem;
  `,
};

export default RealtimeRank;
