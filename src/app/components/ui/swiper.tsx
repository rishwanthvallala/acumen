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
import { BackgroundGradientDemo } from '../../BackgroundGradientDemo';


interface Event {
  event_name: string;
  event_description: string;
  event_timings: string;
  event_venue: string;
  event_image: string;
  event_mode: string;
  event_link?: string;
}

interface SwiperProps {
  events: Event[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedSlide: number | null;
  setSelectedSlide: React.Dispatch<React.SetStateAction<number | null>>;
  handleSlideClick: (index: number) => void;
}

const SwiperComponent: React.FC<SwiperProps> = ({events, activeIndex, setActiveIndex, selectedSlide, setSelectedSlide, handleSlideClick}) => {
    const swiperRef = React.useRef<SwiperRef>(null);
    const [isMobile, setIsMobile] = useState(false);
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

 

  


    return (
      <div className="swiper-container" style={{ marginTop: isMobile ? '80px' : '0' }}>
        <button className="swiper-button-prev" onClick={goPrev} style={{zIndex: 1000, color: 'white'}}>
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
               <div className="description-overlay  top-0 left-0  flex flex-col justify-center items-center text-white backdrop-filter backdrop-blur bg-gray-900 bg-opacity-75">
                 <h3 className="text-xl lg:text-4xl md:text-2xl font-bold mb-2 lg:mb-8 md:mb-8 text-center">{event.event_name}</h3>
                 <p className="mb-2 lg:ml-8 lg:mr-8 md:ml-8 md:mr-8 lg:mb-8 text-xs lg:text-sm " style={{ fontSize: isMobile ? '0.5rem' : '1rem'}}
                 >{event.event_description}</p>
                 <p className="mb-2 ml-2 text-xs md:text-sm lg:text-xl">Mode: {event.event_mode}</p>
                 <p className="mb-2 ml-2 text-xs md:text-sm lg:text-xl">Timings: {event.event_timings}</p>
                 <p className="mb-2 ml-2 lg:mb-8 text-xs md:text-sm lg:text-xl" >Venue: {event.event_venue}</p>
                 <div className="flex space-x-4">
                 {event.event_link && (
                    <a href={event.event_link} >
                      <button className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Register</button>
                    </a>
                  )}
                  <button className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleSlideClick(index)}>Close</button>
                 </div>
               </div>
             )}
           </div>

         </SwiperSlide>

          ))}
        </Swiper>
        <button className="swiper-button-next" onClick={goNext} style={{zIndex: 1000, color: 'white'}}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>


      </div>

      
    );
    };
    

export default SwiperComponent;
