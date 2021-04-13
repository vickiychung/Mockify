json.album do 
  json.extract! @album, :id, :artist_id, :title, :year
  json.coverUrl url_for(@album.cover_photo)
  json.artist @album.artist
end

json.tracks do 
  @album.tracks.each do |track|
    json.set! track.id do 
      json.extract! track, :id, :album_id, :name, :length
      json.trackUrl track.track_file.attached? ? url_for(track.track_file) : ''
      json.artistName track.album.artist.name
    end
  end
end
