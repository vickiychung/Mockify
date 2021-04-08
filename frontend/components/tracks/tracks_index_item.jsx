import React from 'react';

const TracksIndexItem = ({ track, trackUrl }) => {
  return (
    <div>
      <li className="single-track-container">
        <p className="track-name">{track.name}</p>
        <p className="track-length">{track.length.toFixed(2)}</p>
        <audio src={trackUrl} controls />
      </li>
    </div>
  );
};

export default TracksIndexItem;