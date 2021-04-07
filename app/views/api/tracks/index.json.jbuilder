@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :album_id, :name, :length
    json.trackUrl url_for(track.track_file)
  end
end
