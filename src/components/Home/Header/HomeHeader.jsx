import styled from 'styled-components';
function HomeHeader() {
  return (
    <Styled.HomeHeader>
      <Styled.HomeLogo>
        <Styled.HomeYes24 />
        <Styled.HomeTicket />
      </Styled.HomeLogo>
      <Styled.HomeButtonZone>
        <Styled.HomeMyPage>
          <Styled.HomeList />
        </Styled.HomeMyPage>
      </Styled.HomeButtonZone>
    </Styled.HomeHeader>
  );
}

const Styled = {
  HomeHeader: styled.header``,
  HomeLogo: styled.div``,
  HomeYes24: styled.img``,
  HomeTicekt: styled.img``,

  HomeButtonZone: styled.div``,
  HomeMyPage: styled.img``,
  HomeList: styled.img``,
};
export default HomeHeader;
