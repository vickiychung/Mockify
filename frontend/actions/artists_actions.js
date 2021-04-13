import * as ArtistsAPIUtil from '../util/artists_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const CLEAR_ARTISTS = "CLEAR_ARTISTS";

const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    artist: payload.artist,
    albums: payload.albums
  };
};

export const clearArtists = () => {
  return {
    type: CLEAR_ARTISTS
  };
};

export const fetchArtists = () => {
  return (dispatch => {
    return (
      ArtistsAPIUtil.fetchArtists().then(artists => dispatch(receiveArtists(artists)))
    );
  });
};

export const fetchArtist = artistId => {
  return (dispatch => {
    return (
      ArtistsAPIUtil.fetchArtist(artistId).then(artist => dispatch(receiveArtist(artist)))
    );
  });
};
