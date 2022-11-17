import styled from 'styled-components';

function GenreChoice() {
  return (
    <Styled.GenreChoice>
      <Styled.GenreDiv>
        <Styled.GenreImg />
        <Styled.GerneText />
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg />
        <Styled.GerneText />
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg />
        <Styled.GerneText />
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg />
        <Styled.GerneText />
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg />
        <Styled.GerneText />
      </Styled.GenreDiv>
      <Styled.GenreDiv>
        <Styled.GenreImg />
        <Styled.GerneText />
      </Styled.GenreDiv>
    </Styled.GenreChoice>
  );
}

const Styled = {
  GenreChoice: styled.section`
    width: auto;
    margin: 3.6rem 2.75rem 0px 2.75rem;
    background-color: black;
    height: 30rem;
    display: flex;
  `,
  GenreDiv: styled.div``,
  GenreImg: styled.img``,
  GerneText: styled.span``,
};
export default GenreChoice;
