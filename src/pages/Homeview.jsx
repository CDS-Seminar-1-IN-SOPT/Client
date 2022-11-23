import AngelTicket from 'components/Home/Content/AngelTicket';
import GenreChoice from 'components/Home/Content/GenreChoice';
import RealtimeRank from 'components/Home/Content/RealtimeRank';
import RecommendTicket from 'components/Home/Content/RecommendTicket';
import TicketSlider from 'components/Home/Content/TicketSlider';
import HomeviewHeader from 'components/Home/Header/HomeviewHeader';
import useAPI from 'cores/hooks/useAPI';

function Home() {
  const homeData = useAPI('http://52.3.174.121:3000/show/home').data;

  return (
    <>
      {homeData === undefined || homeData === null ? (
        <div>로딩중</div>
      ) : (
        <>
          <HomeviewHeader />
          <TicketSlider bannerData={homeData.data.bannerList} />
          <GenreChoice />
          <RealtimeRank ticketData={homeData.data.rankList} />
          <AngelTicket angelData={homeData.data.angelTicketList} />
          <RecommendTicket />
        </>
      )}
    </>
  );
}

export default Home;
