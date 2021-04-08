import React from 'react';

const TracksIndexItem = ({ track, trackUrl }) => {
  return (
    <div>
      <h3>{track.name}</h3>
      <br/>

      <audio src={trackUrl} controls />
    </div>
  );
};

export default TracksIndexItem;