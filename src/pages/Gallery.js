// File: src/pages/Gallery.js
import React from 'react';
import './Gallery.css'; // Make sure this file exists with styles

function Gallery() {
  return (
    <div className="page gallery">
      <h2>📷 School Friends Gallery</h2>
      <p>From classroom chaos to heartfelt farewells — memories captured forever!</p>

      <div className="gallery-grid">
        <img src="/images/group-photo.jpg" alt="Group Photo" />
        <img src="/images/school-building.jpg" alt="School Building" />
        <img src="/images/farewell.jpg" alt="Farewell" />
        <img src="/images/funny-moment.jpg" alt="Funny Moment" />
        <img src="/images/event.jpg" alt="School Event" />
        <img src="/images/lunch-time.jpg" alt="Lunch Time Fun" />
      </div>

      <marquee className="gallery-marquee" scrollamount="6">
        Andike adigindi group photo or mee friendly photos unte group lo send cheyandi ani 😄📸
      </marquee>
    </div>
  );
}

export default Gallery;
