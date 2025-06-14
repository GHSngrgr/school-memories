// File: src/pages/Home.js
import React from 'react';
import './Home.css'; // make sure to style accordingly

function Home() {
  return (
    <div className="page home">
      {/* Top Marquee */}
      <header className="marquee-header">
        <marquee direction="left" scrollamount="6" className="top-marquee">
          emiledu friends bejaaru avtha unde andike chesaanu anthey.
        </marquee>
      </header>

      {/* Celebration Marquee */}
      <marquee
        direction="right"
        behavior="alternate"
        scrollamount="8"
        className="bottom-marquee"
      >
        🎉 Welcome to the Good Old Days! 🎓 Let's relive the memories! 💖
      </marquee>

      {/* Memory Content */}
      <div className="content">
        <h2>📸 Unforgettable Memories</h2>
        <h3>me also unpredictable.. because! you don't know.. my next move..</h3>
        <p>From bunking classes to sharing tiffins, these moments live forever in our hearts.</p>

        {/* Memory Images */}
        <div className="memories">
          <img src="/images/group-photo.jpg" alt="GHS Yellodu Group Photo" />
          <img src="/images/school-building.jpg" alt="GHS Yellodu School" />
          <img src="/images/funny-moment.jpg" alt="Funny Moment" />
          <img src="/images/farewell.jpg" alt="GHS Yellodu Farewell" />
        </div>

        {/* Quote Marquee */}
        <div className="quote-marquee">
          <marquee behavior="scroll" direction="left" scrollamount="5">
            "We didn’t realize we were making memories. We just knew we were having fun." 💫 — Winnie the Pooh
          </marquee>
        </div>

        {/* Bottom Message */}
        <div className="babu-message">
          <p>
            🤭 oorige bandiroru neerige barade irthareye? hage....<br />
            🤭 website create maadonu.. application create maadade irthinaa..? games create maadade irthinaaa...?<br />
            <strong>babu reddy 😎 unpredictable anthey thaaggedeley</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
