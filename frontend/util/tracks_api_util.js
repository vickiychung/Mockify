export const fetchTrack = trackId => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks/${trackId}`
  });
};
