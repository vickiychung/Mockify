# == Schema Information
#
# Table name: artists
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums,
    foreign_key: :artist_id,
    class_name: "Album"

  has_one_attached :profile_photo
end
