# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Playlist < ApplicationRecord
  validates :user_id, :name, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

  has_many :playlist_tracks,
    foreign_key: :playlist_id,
    class_name: "PlaylistTrack"

  has_many :tracks,
    through: :playlist_tracks,
    source: :track

  has_many :albums,
    through: :tracks,
    source: :album

  has_many :artists,
    through: :albums,
    source: :artist
end
