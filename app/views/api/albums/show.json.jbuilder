json.album do 
  json.extract! @album, :id, :artist_id, :title, :year
  json.coverUrl url_for(@album.cover_photo)
end

json.tracks @album.tracks do |track|
    json.extract! track, :id, :album_id, :name, :length
    json.trackUrl track.track_file.attached? ? url_for(track.track_file) : ''
end
