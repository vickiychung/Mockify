import * as ArtistsAPIUtil from '../util/artists_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

const receiveArtist = artist => {
  return {
    type: RECEIVE_ARTIST,
    artist
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
