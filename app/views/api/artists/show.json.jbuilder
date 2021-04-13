# json.extract! @artist, :id, :name, :description
# json.albums @artist.albums
# json.photoUrl url_for(@artist.profile_photo)

json.artist do
  json.extract! @artist, :id, :name, :description
  json.photoUrl url_for(@artist.profile_photo)
  json.albums @artist.albums
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :artist_id, :title, :year
      json.coverUrl album.cover_photo.attached? ? url_for(album.cover_photo) : ""
    end
  end
end
