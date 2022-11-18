import yes24Logo from 'assets/Icons/Icn_logo.svg';
import menu from 'assets/Icons/icn_menu.svg';
import mypage from 'assets/Icons/icn_mypage.svg';
import ticketLogo from 'assets/Icons/Icn_ticket.svg';
import styled from 'styled-components';
function HomeHeader() {
  return (
    <Styled.HomeHeader>
      <Styled.HomeLogo>
        <Styled.HomeYes24 src={yes24Logo} />
        <Styled.HomeTicekt src={ticketLogo} />
      </Styled.HomeLogo>
      <Styled.HomeButtonZone>
        <Styled.HomeMyPage src={mypage} />
        <Styled.HomeList src={menu} />
      </Styled.HomeButtonZone>
    </Styled.HomeHeader>
  );
}

const Styled = {
  HomeHeader: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.8rem 2.1rem 0 2.1rem;
  `,
  HomeLogo: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  HomeYes24: styled.img`
    width: 2.5rem;
    height: 0.7rem;
    margin-bottom: 0.3rem;
  `,
  HomeTicekt: styled.img``,

  HomeButtonZone: styled.div``,
  HomeMyPage: styled.img`
    margin-right: 1rem;
  `,
  HomeList: styled.img``,
};
export default HomeHeader;
