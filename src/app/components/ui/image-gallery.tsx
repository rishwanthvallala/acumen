import React, { useState } from 'react';
import { StaticImageData } from 'next/image';

interface ImageGalleryProps {
  images: { imageUrl: StaticImageData; name: string; designation: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className="flex justify-center ">
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="relative mb-4 lg:mb-0 mr-4 lg:mr-0">
            <img
              src={image.imageUrl.src}
              alt={`Image ${index + 1}`}
              className={`h-32 lg:h-64 rounded-xl object-cover transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index ? 'filter grayscale w-28' : ''
              } ${index !== 0 && 'mr-2 lg:ml-6'} ${
                hoveredIndex === index ? 'w-40 lg:w-64' : 'w-32 lg:w-56'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
            <div className="absolute bottom-4 left-0 w-full text-center text-white">
              <p className="text-sm lg:text-lg font-bold" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)' }}>
                {image.name}
              </p>
              <p className="text-xs lg:text-sm" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)' }}>
                {image.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;


