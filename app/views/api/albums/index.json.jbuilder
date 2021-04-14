@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :artist_id, :title, :year
    json.coverUrl album.cover_photo.attached? ? url_for(album.cover_photo) : ''
    json.tracks album.tracks
  end
end
