import FooterMenu from 'components/Feed/FooterMenu';
import Header from 'components/Feed/Header';
import ShowDetailBox from 'components/Feed/ShowDetailBox';
import ShowInfomationBox from 'components/Feed/ShowInfomationBox';
import useAPI from 'cores/hooks/useAPI';
import React from 'react';

function Feed() {
  const showDetail = useAPI('http://52.3.174.121:3000/show/2').data.data.show;

  return (
    <>
      {showDetail === undefined || showDetail === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <ShowInfomationBox showDetail={showDetail} />
          <ShowDetailBox castScheduleImageURL={showDetail.castScheduleImageURL} />
          <FooterMenu />
        </>
      )}
    </>
  );
}
export default Feed;
