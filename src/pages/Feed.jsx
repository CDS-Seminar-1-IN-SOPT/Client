import FooterMenu from 'components/Feed/FooterMenu';
import Header from 'components/Feed/Header';
import ShowDetailBox from 'components/Feed/ShowDetailBox';
import ShowInfomationBox from 'components/Feed/ShowInfomationBox';
import React from 'react';
import styled from 'styled-components';

function Feed() {
  return (
    <Styled.Root>
      <Header />
      <ShowInfomationBox />
      <ShowDetailBox />
      <FooterMenu />
    </Styled.Root>
  );
}

export default Feed;

const Styled = {
  Root: styled.div``,
};
