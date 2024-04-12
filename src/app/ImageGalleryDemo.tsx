import React from 'react';
import ImageGallery from './components/ui/image-gallery'; // Import the ImageGallery compon
import image1 from '../coordinators-imgs/hima.jpg';
import image2 from '../coordinators-imgs/pavan.jpg';
import image3 from '../coordinators-imgs/Hrishitha.jpg';
import image4 from '../coordinators-imgs/Bhavana.jpg';

const ImageGalleryDemo: React.FC = () => {
  // Define an array of locally sourced image URLs
  const images = [
    {
      imageUrl: image1,
      name: 'Hima Atluri',
      designation: ' Overall Acumen Coordinator',
    },
    {
      imageUrl: image2,
      name: 'Pavan Kalyan',
      designation: ' Acumen IT Coordinator',
    },
    {
      imageUrl: image3,
      name: 'Hrishitha',
      designation: 'Coordinator',
    },
    {
      imageUrl: image4,
      name: 'Bhavana ',
      designation: 'Coordinator',
    },

  ];

  return (
    <div className="flex justify-center mt-20 mb-8">
      <ImageGallery images={images} /> {/* Render the ImageGallery component with the images array */}
    </div>
  );
};

export default ImageGalleryDemo;
