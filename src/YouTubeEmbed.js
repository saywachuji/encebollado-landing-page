import React from 'react';
import "./youtubeEmbed.css";

function YouTubeEmbed() {
    const videoId = 'AhJpRnQqcVs'; // Replace with your actual YouTube video ID
  
    return (
      <div className="video-container">
        <iframe
          width="400"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Encebollado recipe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  
  export default YouTubeEmbed;
  