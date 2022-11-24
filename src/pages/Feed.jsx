import FooterMenu from 'components/Feed/FooterMenu';
import Header from 'components/Feed/Header';
import ShowDetailBox from 'components/Feed/ShowDetailBox';
import ShowInfomationBox from 'components/Feed/ShowInfomationBox';
import useAPI from 'cores/hooks/useAPI';
import React from 'react';

function Feed() {
  const showDetail = useAPI('http://52.3.174.121:3000/show/2').data;

  return (
    <>
      {showDetail === undefined || showDetail === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <ShowInfomationBox showDetail={showDetail.data.show} />
          <ShowDetailBox />
          <FooterMenu />
        </>
      )}
    </>
  );
}
export default Feed;
