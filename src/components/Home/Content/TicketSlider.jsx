import btn_search from 'assets/buttons/btn_search.svg';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
function TicketSlider({ bannerData }) {
  const navigate = useNavigate();

  const SwiperStyle = createGlobalStyle`
    .swiper-pagination-clickable{
    top:1.4rem;
    z-index: 2;
    overflow: visible;
    position: relative;
  };
  .swiper-coverflow{
    overflow:visible;
  }
  `;

  const viewFeed = () => {
    navigate(`/feed`);
  };

  return (
    <>
      <Styled.SearchInput src={btn_search} />
      <Styled.TicketSlider>
        <SwiperStyle />
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 140,
            modifier: 1.5,
            slideShadows: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
            styled: Styled.SwiperPagination,
          }}
          modules={[EffectCoverflow, Pagination]}
          navigation={true}
          className="mySwiper">
          {bannerData.map((v) => (
            <Styled.Swiper key={v.id}>
              <Styled.SwieperImg key={v.url} src={v.imageURL} onClick={viewFeed} />
            </Styled.Swiper>
          ))}
        </Swiper>
      </Styled.TicketSlider>
    </>
  );
}

const Styled = {
  SearchInput: styled.img`
    margin: 1.9rem 4.8rem 2.4rem 4.8rem;
  `,
  TicketSlider: styled.section`
    overflow: hidden;
    height: 266px;
  `,
  Swiper: styled(SwiperSlide)`
    width: 37.5rem;
    overflow: visible;
  `,
  SwieperImg: styled.img`
    height: 24.2rem;
    width: 23.2rem;
    border-radius: 1.5rem;
  `,
  SwiperPagination: styled.div`
    position: relative;
    top: 300px;
  `,
};

export default TicketSlider;
