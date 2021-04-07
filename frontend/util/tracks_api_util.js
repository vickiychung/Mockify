export const fetchTrack = trackId => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks/${trackId}`
  });
};

// maybe temporary
export const fetchTracks = () => {
  return $.ajax({
    method: "GET",
    url: "/api/tracks"
  });
};
// maybe temporary
