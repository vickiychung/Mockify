# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  artist_id  :integer          not null
#  title      :string           not null
#  year       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
  validates :artist_id, :title, presence: true

  has_many :tracks,
    foreign_key: :album_id,
    class_name: "Track"

  has_one_attached :cover_photo
end
