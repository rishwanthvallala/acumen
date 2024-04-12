import React from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from FontAwesome library
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import desired icons
import './styles.css'; // Assuming styles are separated into a CSS file
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Event {
  event_name: string;
  event_description: string;
  event_timings: string;
  event_venue: string;
  event_image: string;
}

interface SwiperProps {
  events: Event[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SwiperComponent: React.FC<SwiperProps> = ({events, activeIndex, setActiveIndex }) => {
    const swiperRef = React.useRef<SwiperRef>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedSlide, setSelectedSlide] = useState<number | null>(null);

     const goNext = () => {
        swiperRef.current?.swiper.slideNext();
     };

     const goPrev = () => {
        swiperRef.current?.swiper.slidePrev();
     };

     useEffect(() => {
       const handleResize = () => {
         setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
       };
   
       handleResize();
       window.addEventListener('resize', handleResize);
       return () => window.removeEventListener('resize', handleResize);
     }, []);

     const handleSlideClick = (index: number) => {
      setSelectedSlide(index === selectedSlide ? null : index);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedSlide !== null && !event.target) {
        setSelectedSlide(null); // Close if clicked outside the overlay
      }
    };
    useEffect(() => {
      document.addEventListener('click', handleClickOutside); // Add event listener
  
      return () => document.removeEventListener('click', handleClickOutside); // Remove on cleanup
    }, [selectedSlide]); // Re-attach listener on selectedSlide change (optional)
  

    return (
      <div className="swiper-container" style={{ marginTop: isMobile ? '40px' : '0' }}>
        <button className="swiper-button-prev" onClick={goPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
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
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div style={{ position: 'relative' }}>
                <img src={event.event_image} alt={`Image ${index + 1}`} className="swiper-image" onClick={() => handleSlideClick(index)} />
                {selectedSlide === index && (
                  <div className="description-overlay text-white">
                    <h3 className="text-white text-2xl font-bold mb-2 text-center text-white">  
                      {event.event_name}
                    </h3>
                    <p>
                      {event.event_description}
                    </p>
                    <p>
                      Timings: {event.event_timings}
                    </p>
                    <p>
                      Venue: {event.event_venue}
                    </p>
                    <button className="register-button">Register</button>
                    <button className="close" onClick={() => handleSlideClick(index)}> Close </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-next" onClick={goNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
    };
    

export default SwiperComponent;
