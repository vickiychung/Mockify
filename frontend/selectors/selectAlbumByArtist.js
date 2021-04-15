const selectAlbumByArtist = (state, artistId) => {
  return Object.values(state.entities.albums)
    .filter(album => album.artistId === artistId);
};

export default selectAlbumByArtist;
