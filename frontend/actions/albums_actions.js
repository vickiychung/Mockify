import * as AlbumsAPIUtil from '../util/albums_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

const receiveAlbum = album => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const fetchAlbums = () => {
  return (dispatch => {
    return (
      AlbumsAPIUtil.fetchAlbums().then(albums => dispatch(receiveAlbums(albums)))
    );
  });
};

export const fetchAlbum = albumId => {
  return (dispatch => {
    return (
      AlbumsAPIUtil.fetchAlbum(albumId).then(album => dispatch(receiveAlbum(album)))
    );
  });
};
