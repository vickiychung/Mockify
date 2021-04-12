json.extract! @artist, :id, :name, :description
json.albums @artist.albums
json.photoUrl url_for(@artist.profile_photo)