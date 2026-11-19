import React, { useState } from 'react';

// Sample data structures tailored for a Hotel Management Project
const HOTEL_IMAGES = [
  {
    id: 1,
    original: '/hotelimages/hotel.jpg',
    thumbnail: '/hotelimages/hotel.jpg',
    alt: 'Luxury Suite Bedroom',
    title: 'Presidential Suite Bedding'
  },
  {
    id: 2,
    original: '/hotelimages/hotel1.jpg',
    thumbnail: '/hotelimages/hotel1.jpg',
    alt: 'Modern Hotel Bathroom',
    title: 'En-Suite Marble Bathroom'
  },
  {
    id: 3,
    original: '/hotelimages/hotel.jpg',
    thumbnail: '/hotelimages/hotel.jpg',
    alt: 'Executive Lounge View',
    title: 'Private Lounge Balcony View'
  },
  {
    id: 4,
    original: '/hotelimages/hotel1.jpg',
    thumbnail: '/hotelimages/hotel1.jpg',
    alt: 'Resort Swimming Pool',
    title: 'Infinity Swimming Pool'
  },
  {
    id: 5,
    original: '/hotelimages/hotel.jpg',
    thumbnail: '/hotelimages/hotel.jpg',
    alt: 'Resort Swimming Pool',
    title: 'Infinity Swimming Pool'
  },
  {
    id: 6,
    original: '/hotelimages/hotel1.jpg',
    thumbnail: '/hotelimages/hotel1.jpg',
    alt: 'Resort Swimming Pool',
    title: 'Infinity Swimming Pool'
  },
  {
    id: 7,
    original: '/hotelimages/hotel.jpg',
    thumbnail: '/hotelimages/hotel.jpg',
    alt: 'Resort Swimming Pool',
    title: 'Infinity Swimming Pool'
  },
  {
    id: 8,
    original: '/hotelimages/hotel.jpg',
    thumbnail: '/hotelimages/hotel.jpg',
    alt: 'Resort Swimming Pool',
    title: 'Infinity Swimming Pool'
  },
  {
    id: 9,
    original: '/hotelimages/hotel1.jpg',
    thumbnail: '/hotelimages/hotel1.jpg',
    alt: 'Resort Swimming Pool',
    title: 'Infinity Swimming Pool'
  }
];

export const HotelGallery = () => {
  const [activeImage, setActiveImage] = useState(HOTEL_IMAGES[0]);

  return (
    <>
    <div style={styles.galleryContainer}>
      {/* 1. Main Display Window */}
      <div style={styles.mainViewContainer}>
        <img 
          src={activeImage.original} 
          alt={activeImage.alt} 
          style={styles.mainImage} 
        />
        <div style={styles.captionOverlay}>
          <h3 style={styles.captionTitle}>{activeImage.title}</h3>
        </div>
      </div>

      {/* 2. Horizontal Thumbnail Strip */}
      <div style={styles.thumbnailTrack}>
        {HOTEL_IMAGES.map((img) => {
          const isActive = img.id === activeImage.id;
          return (
            <>
            <button
              key={img.id}
              onClick={() => setActiveImage(img)}
              style={{
                ...styles.thumbButton,
                borderColor: isActive ? '#d4af37' : '#e0e0e0', // Gold highlight for active item
                transform: isActive ? 'scale(1.05)' : 'scale(1)'
              }}
              aria-label={`View ${img.title}`}
            >
              <img 
                src={img.thumbnail} 
                alt={img.alt} 
                style={{
                  ...styles.thumbImage,
                  opacity: isActive ? 1 : 0.6
                }} 
              />
            </button>
            </>
          );
        })}
      </div>
    </div>
    </>
  );
}

// Inline styles for complete self-containment
const styles = {
  galleryContainer: {
    // maxWidth: '800px',
    // margin: '20px auto',
    padding: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    backgroundColor: '#fff',
    fontFamily: 'system-ui, sans-serif'
  },
  mainViewContainer: {
    position: 'relative',
    width: '100%',
    height: '450px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5'
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.3s ease-in-out'
  },
  captionOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
    padding: '20px 15px',
    color: '#fff'
  },
  captionTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '500'
  },
  thumbnailTrack: {
    display: 'flex',
    gap: '12px',
    marginTop: '15px',
    overflowX: 'auto',
    paddingBottom: '5px'
  },
  thumbButton: {
    padding: 0,
    cursor: 'pointer',
    border: '3px solid transparent',
    borderRadius: '6px',
    overflow: 'hidden',
    outline: 'none',
    backgroundColor: 'transparent',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    flexShrink: 0
  },
  thumbImage: {
    width: '100px',
    height: '68px',
    objectFit: 'cover',
    display: 'block',
    transition: 'opacity 0.2s ease'
  }
};
