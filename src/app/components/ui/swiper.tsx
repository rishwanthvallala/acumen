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
    const [blurBackground, setBlurBackground] = useState(false);

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
      setSelectedSlide(selectedSlide === index ? null : index);
      // Delay the toggle of blurBackground state by 100 milliseconds (0.1 second)
        setBlurBackground(!blurBackground); // Toggle blur background
    
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
          effect="cards"
          grabCursor={true}
          className="mySwiper"
          updateOnWindowResize={true}
          autoplay={{ disableOnInteraction: true }}
        >
          {events.map((event, index) => (
           <SwiperSlide key={index}>
           <div style={{ position: 'relative' }}>
             <img src={event.event_image} alt={`Image ${index + 1}`} className="swiper-image" onClick={() => handleSlideClick(index)} />
             {selectedSlide === index && (
               <div className="description-overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white backdrop-filter backdrop-blur bg-gray-800 bg-opacity-75">
                 <h3 className="text-2xl font-bold mb-2 text-center">{event.event_name}</h3>
                 <p className="mb-2">{event.event_description}</p>
                 <p className="mb-2">Timings: {event.event_timings}</p>
                 <p className="mb-2">Venue: {event.event_venue}</p>
                 <div className="flex space-x-4">
                   <button className="register-button bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Register</button>
                   <button className="close bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={() => handleSlideClick(index)}>Close</button>
                 </div>
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
