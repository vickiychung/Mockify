json.extract! @album, :id, :artist_id, :title, :year
json.coverUrl url_for(@album.cover_photo)
json.tracks album.tracks
