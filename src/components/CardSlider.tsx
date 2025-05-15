import React, { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Card from './Card';

// Import images
import card1 from '../assets/images/card1.jpg';
import card2 from '../assets/images/card2.jpg';
import card3 from '../assets/images/card3.jpg';
import card4 from '../assets/images/card4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px 0 40px;
  overflow: hidden;
  
  .swiper {
    overflow: visible;
    padding: 20px;
    margin: -10px;
  }

  .swiper-slide {
    width: 220px;
    opacity: 0.4;
    transform: scale(0.85);
    transition: all 0.4s ease;
    
    &.swiper-slide-active {
      opacity: 1;
      transform: scale(1);
    }

    &.swiper-slide-prev,
    &.swiper-slide-next {
      opacity: 0.6;
      transform: scale(0.9);
    }
  }

  .swiper-pagination {
    bottom: 0 !important;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    margin: 0 4px !important;
    background: #D1D5DB;
    opacity: 1;
    
    &-active {
      background: #000000;
    }
  }
`;

// 重复卡片数据以实现无缝循环效果
const cardData = [
  {
    image: card1,
    amount: '20,126',
    currency: '¥',
    description: 'Drinks at Yokocho',
    location: 'Japan · JPY',
    time: '11:30',
    cashback: '+ S$23.90',
    cashbackText: 'Well deserved'
  },
  {
    image: card2,
    amount: '6,252',
    currency: 'S$',
    description: 'Trainers cashback',
    location: 'Main',
    time: '11:30',
    cashback: '+ S$23.90',
    cashbackText: 'Well deserved'
  },
  {
    image: card3,
    amount: '2,500',
    currency: '$',
    description: 'New York Pizza',
    location: 'United States · USD',
    time: '11:30',
    cashback: '+ S$23.90',
    cashbackText: 'Well deserved'
  },
  {
    image: card4,
    amount: '20,126',
    currency: '¥',
    description: 'Drinks at Yokocho',
    location: 'Japan · JPY',
    time: '11:30',
    cashback: '+ S$23.90',
    cashbackText: 'Well deserved'
  }
];

// 创建一个包含重复项的数组以实现无缝循环
const extendedCardData = [...cardData];

const CardSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType>(null);

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index, 600);
    }
  };

  return (
    <SliderContainer>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={2}
        slidesPerView={1.6}
        centeredSlides={false}
        loop={true}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            centeredSlides: true
          },
        }}
        initialSlide={1}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
      >
        {extendedCardData.map((card, index) => (
          <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default CardSlider; 