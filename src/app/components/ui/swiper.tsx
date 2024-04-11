import React from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from FontAwesome library
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import desired icons
import './styles.css'; // Assuming styles are separated into a CSS file
import { useMediaQuery } from 'react-responsive';

interface SwiperProps {
  images: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SwiperComponent: React.FC<SwiperProps> = ({ images, activeIndex, setActiveIndex }) => {
    const swiperRef = React.useRef<SwiperRef>(null);
     // Function to navigate to the next slide
     const goNext = () => {
        swiperRef.current?.swiper.slideNext();
     };
    
     // Function to navigate to the previous slide
     const goPrev = () => {
        swiperRef.current?.swiper.slidePrev();
     };
     const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

     return (
        <div className=" swiper-container" style={{ marginTop: isMobile ? '32px' : '0' }}>
          <button className="swiper-button-prev" onClick={goPrev}>
            <FontAwesomeIcon icon={faChevronLeft} /> {/* Use FontAwesomeIcon for the left icon */}
          </button>
          <Swiper
            ref={swiperRef}
            effect="cards"
            grabCursor={true}
            className="mySwiper"
            updateOnWindowResize={true}
            onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{ disableOnInteraction: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Image ${index + 1}`} className="swiper-image" />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-next" onClick={goNext}>
            <FontAwesomeIcon icon={faChevronRight} /> {/* Use FontAwesomeIcon for the right icon */}
          </button>
        </div>
      );
    };
    

export default SwiperComponent;
