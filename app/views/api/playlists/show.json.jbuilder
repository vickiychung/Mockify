json.extract! @playlist, :id, :user_id, :name

json.tracks do
  @playlist.playlist_tracks.each_with_index do |play_tracks, i|
    json.set! play_tracks.track.id do
      json.extract! play_tracks.track, :id, :album_id, :name, :length
      json.listNum i + 1
      json.artistName play_tracks.track.album.artist.name
      json.trackUrl url_for(play_tracks.track.track_file)
      json.coverUrl url_for(play_tracks.track.album.cover_photo)
    end
  end
end

json.albums do
  @playlist.albums.uniq.each do |album|
    json.set! album.id do
      json.extract! album, :id, :artist_id, :title
      json.coverUrl url_for(album.cover_photo)
    end
  end
end

json.artists do
  @playlist.artists.uniq.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
    end
  end
end
