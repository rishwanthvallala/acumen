import React from 'react';
import ImageGallery from './components/ui/image-gallery'; // Import the ImageGallery compon

const ImageGalleryDemo: React.FC = () => {
  // Define an array of locally sourced image URLs
  const images = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
      name: 'Hima Atluri',
      designation: ' Overall Acumen Coordinator',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
      name: 'Pavan Kalyan',
      designation: ' Acumen IT Coordinator',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      name: 'Hrishitha',
      designation: 'Coordinator',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
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
