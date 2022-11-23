import concert from 'assets/Icons/icn_concert.svg';
import event from 'assets/Icons/icn_event.svg';
import family from 'assets/Icons/icn_family.svg';
import musical from 'assets/Icons/icn_musical.svg';
import play from 'assets/Icons/icn_play.svg';
import sing from 'assets/Icons/icn_sing.svg';
import styled from 'styled-components';
function GenreChoice() {
  return (
    <Styled.GenreChoice>
      <Styled.GenreDiv>
        <Styled.GenreImg src={concert} />
        <Styled.GerneText>콘서트</Styled.GerneText>
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg src={musical} />
        <Styled.GerneText>뮤지컬</Styled.GerneText>
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg src={play} />
        <Styled.GerneText>연극</Styled.GerneText>
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg src={sing} />
        <Styled.GerneText>
          무용&
          <br />
          클래식
        </Styled.GerneText>
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg src={event} />
        <Styled.GerneText>
          행사&
          <br />
          전시회
        </Styled.GerneText>
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg src={family} />
        <Styled.GerneText>
          가족&
          <br />
          어린이
        </Styled.GerneText>
      </Styled.GenreDiv>
    </Styled.GenreChoice>
  );
}

const Styled = {
  GenreChoice: styled.section`
    width: 37.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    padding-left: 2.75rem;
    padding-right: 2.75rem;
  `,
  GenreDiv: styled.div`
    width: 33.33%;
    display: flex;
    align-items: center;
    margin-top: 2.8rem;
  `,
  GenreImg: styled.img`
    margin-left: 0.5rem;
  `,
  GerneText: styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin-left: 1.8rem;
  `,
};
export default GenreChoice;
