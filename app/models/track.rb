# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  album_id   :integer          not null
#  name       :string           not null
#  length     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Track < ApplicationRecord
  validates :album_id, :name, :length, presence: true

  belongs_to :album,
    foreign_key: :album_id,
    class_name: "Album"

  has_one_attached :track_file
end