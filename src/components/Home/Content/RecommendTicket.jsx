import axios from 'axios';
import { client } from 'cores/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function RecommendTicket() {
  const [currentGenre, setcurrentGenre] = useState(1);
  const [showData, setshowData] = useState([]);
  const changeGenre = (e) => {
    setcurrentGenre(e.target.id);
  };
  const getShowData = async () => {
    const data = await client.get(`/show/genre?genreId=${currentGenre}`);
    setshowData(data.data.data.showList);
  };
  useEffect(() => {
    getShowData();
  }, [currentGenre]);

  const filterGenre = (showType) => {
    switch (showType) {
      case 1:
        return '콘서트';
      case 2:
        return '뮤지컬';
      case 3:
        return '연극';
      case 4:
        return '클래식';
      case 5:
        return '전시회';
      case 6:
        return '어린이';
    }
  };
  const filterDate = (reservation) => {
    const date = new Date(reservation);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    const dateString = year + '.' + month + '.' + day;
    return dateString;
  };
  return (
    <Styled.Recommend>
      <Styled.RecommendInfo>
        <Styled.RecommendText>다빈님</Styled.RecommendText>
        이런 공연은 어떠세요?
      </Styled.RecommendInfo>
      <Styled.GenreLists>
        {currentGenre == 1 ? (
          <Styled.GenreBox>로맨스</Styled.GenreBox>
        ) : (
          <Styled.UnchoicedGenreBox id={1} onClick={(e) => changeGenre(e)}>
            로맨스
          </Styled.UnchoicedGenreBox>
        )}
        {currentGenre == 2 ? (
          <Styled.GenreBox>공포</Styled.GenreBox>
        ) : (
          <Styled.UnchoicedGenreBox id={2} onClick={(e) => changeGenre(e)}>
            공포
          </Styled.UnchoicedGenreBox>
        )}
        {currentGenre == 3 ? (
          <Styled.GenreBox>코믹</Styled.GenreBox>
        ) : (
          <Styled.UnchoicedGenreBox id={3} onClick={(e) => changeGenre(e)}>
            코믹
          </Styled.UnchoicedGenreBox>
        )}
        {currentGenre == 4 ? (
          <Styled.GenreBox>미스터리</Styled.GenreBox>
        ) : (
          <Styled.UnchoicedGenreBox id={4} onClick={(e) => changeGenre(e)}>
            미스터리
          </Styled.UnchoicedGenreBox>
        )}
        {currentGenre == 5 ? (
          <Styled.GenreBox>퍼포먼스</Styled.GenreBox>
        ) : (
          <Styled.UnchoicedGenreBox id={5} onClick={(e) => changeGenre(e)}>
            퍼포먼스
          </Styled.UnchoicedGenreBox>
        )}
      </Styled.GenreLists>

      {showData.map((ticket, index) => (
        <Styled.RecommendTicekt key={ticket.title}>
          <Styled.RecommendImg key={ticket.imageURL} src={ticket.imageURL} />
          <Styled.RecoommedDate key={ticket.reservationStartAt}>
            예매 시간 {filterDate(ticket.reservationStartAt)}~ {filterDate(ticket.reservationEndAt)}
          </Styled.RecoommedDate>
          <Styled.TicektInfo>
            <Styled.RecommendGenre key={ticket.showType}>{filterGenre(ticket.showType)}</Styled.RecommendGenre>
            <Styled.RecommendTitle key={ticket.title}>{ticket.title}</Styled.RecommendTitle>
          </Styled.TicektInfo>
        </Styled.RecommendTicekt>
      ))}
    </Styled.Recommend>
  );
}
const Styled = {
  Recommend: styled.section`
    width: 100%;
    padding: 0 1.6rem 0 1.6rem;
    margin-top: 4rem;
    height: auto;
    padding-bottom: 2.2rem;
  `,
  RecommendText: styled.div`
    margin-bottom: 0.7rem;
  `,
  RecommendInfo: styled.header`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  `,
  GenreLists: styled.div`
    display: flex;
    margin-top: 1rem;
  `,
  GenreBox: styled.div`
    width: 20%;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 0.2rem solid #333333;
    cursor: pointer;
  `,
  UnchoicedGenreBox: styled.div`
    width: 20%;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: rgba(51, 51, 51, 0.4);
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom: 0.2rem solid rgba(51, 51, 51, 0.4);
  `,
  RecommendTicekt: styled.div`
    width: 100%;
    height: 21.8rem;
    background: #ffffff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 0.8rem;
  `,
  RecommendImg: styled.img`
    width: 100%;
    height: 15rem;
    border-radius: 5px;
  `,
  TicektInfo: styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.4rem;
  `,
  RecoommedDate: styled.div`
    margin-top: 1.6rem;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: rgba(51, 51, 51, 0.6);
    margin-left: 1.2rem;
  `,
  RecommendGenre: styled.div`
    width: 40px;
    height: 20px;
    background: #333333;
    border-radius: 3px;
    color: white;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.2rem;
  `,
  RecommendTitle: styled.div`
    width: 27.3rem;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-left: 0.6rem;
  `,
};
export default RecommendTicket;
