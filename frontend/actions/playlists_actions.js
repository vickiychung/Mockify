import * as PlaylistsAPIUtil from '../util/playlists_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLIST_PAYLOAD = "RECEIVE_PLAYLIST_PAYLOAD";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_PLAYLIST_TRACK = "RECEIVE_PLAYLIST_TRACK";
export const REMOVE_PLAYLIST_TRACK = "REMOVE_PLAYLIST_TRACK";

const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

const receivePlaylistPayload = payload => {
  return {
    type: RECEIVE_PLAYLIST_PAYLOAD,
    tracks: payload.tracks,
    albums: payload.albums,
    artists: payload.artists
  };
};

const updatePlaylistName = playlist => {
  console.log(playlist)
  return {
    type: UPDATE_PLAYLIST,
    playlist
  };
};

const removePlaylist = playlistId => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId
  };
};

const receivePlaylistTrack = trackId => {
  return {
    type: RECEIVE_PLAYLIST_TRACK,
    trackId
  };
};

const removePlaylistTrack = trackId => {
  return {
    type: REMOVE_PLAYLIST_TRACK,
    trackId
  };
};

export const fetchPlaylists = () => {
  return (dispatch => {
    return (
      PlaylistsAPIUtil.fetchPlaylists()
        .then(playlists => dispatch(receivePlaylists(playlists)))
    );
  });
};

export const fetchPlaylist = playlistId => {
  return (dispatch => {
    return (
      PlaylistsAPIUtil.fetchPlaylist(playlistId)
        .then(playlist => dispatch(receivePlaylist(playlist)))
    );
  });
};

export const fetchPlaylistPayload = playlistId => {
  return (dispatch => {
    return (
      PlaylistsAPIUtil.fetchPlaylist(playlistId)
        .then(payload => dispatch(receivePlaylistPayload(payload)))
    );
  });
};

export const createPlaylist = playlist => {
  return (dispatch => {
    return (
      PlaylistsAPIUtil.createPlaylist(playlist)
        .then(playlist => dispatch(receivePlaylist(playlist)))
    );
  });
};

export const updatePlaylist = playlist => {
  return (dispatch => {
    return (
      PlaylistsAPIUtil.updatePlaylist(playlist)
        .then(playlist => dispatch(updatePlaylistName(playlist)))
    );
  });
};

export const deletePlaylist = playlistId => {
  return (dispatch => {
    return (
      PlaylistsAPIUtil.deletePlaylist(playlistId)
        .then(playlistId => dispatch(removePlaylist(playlistId)))
    );
  });
};

export const addTrackToPlaylist = (trackId, playlistId) => {
  return (dispatch => {
    return (
      PlaylistsAPIUtil.addTrackToPlaylist(trackId, playlistId)
        .then(trackId => dispatch(receivePlaylistTrack(trackId)))
    );
  });
};

export const removeTrackFromPlaylist = (trackId, playlistId) => {
  return (dispatch => {
    return (
      PlaylistsAPIUtil.removeTrackFromPlaylist(trackId, playlistId)
        .then(trackId => dispatch(removePlaylistTrack(trackId)))
    );
  });
};
