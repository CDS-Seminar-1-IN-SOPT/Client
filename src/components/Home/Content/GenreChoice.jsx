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
    width: auto;
    margin: 3.6rem 2.75rem 0px 2.75rem;
    height: 30rem;
    display: flex;
  `,
  GenreDiv: styled.div``,
  GenreImg: styled.img``,
  GerneText: styled.span``,
};
export default GenreChoice;
