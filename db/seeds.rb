# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('tracks')

guest = User.create!(username: "guest", password: "password")

# REMINDER: Change album_id for tracks after creating albums table
track_1 = Track.create!(album_id: 1, name: "Jam", length: 5.39)
track_2 = Track.create!(album_id: 1, name: "Why You Wanna Trip on Me", length: 5.25)
track_3 = Track.create!(album_id: 1, name: "In the Closet", length: 4.49)
track_4 = Track.create!(album_id: 1, name: "She Drives Me Wild", length: 3.42)
track_5 = Track.create!(album_id: 1, name: "Remember the Time", length: 3.59)
track_6 = Track.create!(album_id: 1, name: "Can't Let Her Get Away", length: 5.00)
track_7 = Track.create!(album_id: 1, name: "Heal the World", length: 6.24)
track_8 = Track.create!(album_id: 1, name: "Black or White", length: 4.15)
track_9 = Track.create!(album_id: 1, name: "Who Is It", length: 6.33)
track_10 = Track.create!(album_id: 1, name: "Give In to Me", length: 5.29)
track_11 = Track.create!(album_id: 1, name: "Will You Be There", length: 3.40)
track_12 = Track.create!(album_id: 1, name: "Keep the Faith", length: 5.58)
track_13 = Track.create!(album_id: 1, name: "Gone Too Soon", length: 3.22)
track_14 = Track.create!(album_id: 1, name: "Dangerous", length: 7.01)