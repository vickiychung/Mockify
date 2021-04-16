export const fetchPlaylists = () => {
  return $.ajax({
    method: "GET",
    url: "/api/playlists"
  });
};

export const fetchPlaylist = playlistId => {
  return $.ajax({
    method: "GET",
    url: `/api/playlists/${playlistId}`
  });
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: "POST",
    url: "/api/playlists",
    data: { playlist }
  });
};

export const updatePlaylist = playlist => {
  return $.ajax({
    method: "PATCH",
    url: `/api/playlists/${playlist.id}`,
    data: { playlist }
  });
};

export const deletePlaylist = playlistId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/playlists/${playlistId}`
  })
}

export const addTrackToPlaylist = (trackId, playlistId) => {
  return $.ajax({
    method: "POST",
    url: `/api/playlists/${playlistId}/tracks/${trackId}`
  })
}

export const removeTrackFromPlaylist = (trackId, playlistId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/playlists/${playlistId}/tracks/${trackId}`
  })
}
