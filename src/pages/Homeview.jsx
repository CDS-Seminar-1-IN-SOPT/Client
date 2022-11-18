import AngelTicket from 'components/Home/Content/AngelTicket';
import GenreChoice from 'components/Home/Content/GenreChoice';
import RealtimeRank from 'components/Home/Content/RealtimeRank';
import RecommendTicket from 'components/Home/Content/RecommendTicket';
import TicketSlider from 'components/Home/Content/TicketSlider';
import useAPI from 'cores/hooks/useAPI';

function Home() {
  const homeData = useAPI('/show/home').data;

  return (
    <>
      {homeData === null ? (
        <div>로딩중</div>
      ) : (
        <>
          <TicketSlider bannerData={homeData.bannerList} />
          <GenreChoice />
          <RealtimeRank ticketData={homeData.rankList} />
          <AngelTicket angelData={homeData.angelTicketList} />
          <RecommendTicket />
        </>
      )}
    </>
  );
}

export default Home;
