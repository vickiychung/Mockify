# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Track.destroy_all
Album.destroy_all
Artist.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('tracks')
ActiveRecord::Base.connection.reset_pk_sequence!('albums')
ActiveRecord::Base.connection.reset_pk_sequence!('artists')

# users seed
guest = User.create!(username: "guest", password: "password")

# artists seed
artist_1 = Artist.create!(name: "Michael Jackson", description: "~26,301,866 monthly listeners")
artist_2 = Artist.create!(name: "Jolin Tsai", description: "~1,673,894 monthly listeners")

# aws artists seed
# REMEMBER TO CHANGE THESE
# artist_1.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/michael_jackson.jpeg'), filename: "michael_jackson.jpeg")
# artist_2.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/jolin_tsai.jpeg'), filename: "jolin_tsai.jpeg")

# REAL ARTISTS SEED HERE
artist_1.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/michael_jackson.jpeg"), filename: "michael_jackson.jpeg")
artist_2.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/jolin_tsai.jpeg"), filename: "jolin_tsai.jpeg")

# albums seed
# REMINDER: Change arist_id after creating artists table
# album_1 = Album.create!(artist_id: 1, title: "Dangerous", year: "1991")
# album_2 = Album.create!(artist_id: 2, title: "Ugly Beauty", year: "2018")
# album_3 = Album.create!(artist_id: 2, title: "Play", year: "2014")

# aws albums seed
# REMEMBER TO CHANGE FILE PATHS BEFORE DEPLOYING TO PROD
# album_1.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/dangerous_album_cover.jpeg'), filename: "dangerous_album_cover.jpeg")
# album_2.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/ugly_beauty_cover.jpeg'), filename: "ugly_beauty_cover.jpeg")
# album_3.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/play_cover.jpeg'), filename: "play_cover.jpeg")

# REAL ALBUMS SEEDS HERE
album_1.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/dangerous_album_cover.jpeg"), filename: "dangerous_album_cover.jpeg")
album_2.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/ugly_beauty_cover.jpeg"), filename: "ugly_beauty_cover.jpeg")
album_3.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/play_cover.jpeg"), filename: "play_cover.jpeg")

# tracks seed
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

track_15 = Track.create!(album_id: 2, name: "Necessary Evil", length: 3.49)
track_16 = Track.create!(album_id: 2, name: "Womxnly", length: 3.12)
track_17 = Track.create!(album_id: 2, name: "Ugly Beauty", length: 3.02)
track_18 = Track.create!(album_id: 2, name: "Karma", length: 3.06)
track_19 = Track.create!(album_id: 2, name: "Lady in Red", length: 3.15)
track_20 = Track.create!(album_id: 2, name: "Sweet Guilty Pleasure", length: 3.28)
track_21 = Track.create!(album_id: 2, name: "Romance", length: 4.41)
track_22 = Track.create!(album_id: 2, name: "Vulnerability", length: 5.02)
track_23 = Track.create!(album_id: 2, name: "Hubby", length: 2.54)
track_24 = Track.create!(album_id: 2, name: "Life Sucks", length: 3.02)
track_25 = Track.create!(album_id: 2, name: "Shadow Self", length: 3.42)

track_26 = Track.create!(album_id: 3, name: "Gentlewomen", length: 3.40)
track_27 = Track.create!(album_id: 3, name: "Play", length: 3.21)
track_28 = Track.create!(album_id: 3, name: "Medusa", length: 4.06)
track_29 = Track.create!(album_id: 3, name: "Lip Reading", length: 3.36)
track_30 = Track.create!(album_id: 3, name: "I'm Not Yours", length: 3.50)
track_31 = Track.create!(album_id: 3, name: "I Love, I Embrace", length: 3.53)
track_32 = Track.create!(album_id: 3, name: "Miss Trouble", length: 3.14)
track_33 = Track.create!(album_id: 3, name: "Phony Queen", length: 3.14)
track_34 = Track.create!(album_id: 3, name: "The Third Person and I", length: 4.50)
track_35 = Track.create!(album_id: 3, name: "We're All Different, Yet the Same", length: 3.19)

# aws tracks seed 
# REMEMBER TO CHANGE THE FILE PATHS BEFORE DEPLOYING TO PRD
# track_1.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/01_jam.mp3'), filename: "jam.mp3")
# track_2.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/02_why_you_wanna_trip_on_me.mp3'), filename: "why_you_wanna_trip_on_me.mp3")
# track_3.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/03_in_the_closet.mp3'), filename: "in_the_closet.mp3")
# track_4.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/04_she_drives_me_wild.mp3'), filename: "she_drives_me_wild.mp3")
# track_5.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/05_remember_the_time.mp3'), filename: "remember_the_time.mp3")
# track_6.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/06_cant_let_her_get_away.mp3'), filename: "cant_let_her_get_away.mp3")
# track_7.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/07_heal_the_world.mp3'), filename: "heal_the_world.mp3")
# track_8.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/08_black_or_white.mp3'), filename: "black_or_white.mp3")
# track_9.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/09_who_is_it.mp3'), filename: "who_is_it.mp3")
# track_10.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/10_give_in_to_me.mp3'), filename: "give_in_to_me.mp3")
# track_11.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/11_will_you_be_there.mp3'), filename: "will_you_be_there.mp3")
# track_12.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/12_keep_the_faith.mp3'), filename: "keep_the_faith.mp3")
# track_13.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/13_gone_too_soon.mp3'), filename: "gone_too_soon.mp3")
# track_14.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/14_dangerous.mp3'), filename: "dangerous.mp3")

# track_15.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/01_necessary_evil.mp3'), filename: "necessary_evil.mp3")
# track_16.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/02_womxnly.mp3'), filename: "womxnly.mp3")
# track_17.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/03_ugly_beauty.mp3'), filename: "ugly_beauty.mp3")
# track_18.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/04_karma.mp3'), filename: "karma.mp3")
# track_19.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/05_lady_in_red.mp3'), filename: "lady_in_red.mp3")
# track_20.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/06_sweet_guilty_pleasure.mp3'), filename: "sweet_guilty_pleasure.mp3")
# track_21.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/07_romance.mp3'), filename: "romance.mp3")
# track_22.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/08_vulnerability.mp3'), filename: "vulnerability.mp3")
# track_23.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/09_hubby.mp3'), filename: "hubby.mp3")
# track_24.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/10_life_sucks.mp3'), filename: "life_sucks.mp3")
# track_25.track_file.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/11_shadow_self.mp3'), filename: "shadow_self.mp3")

# track_26.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/01_gentlewomen.mp3"), filename: "gentlewomen.mp3")
# track_27.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/02_play.mp3"), filename: "play.mp3")
# track_28.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/03_medusa.mp3"), filename: "medusa.mp3")
# track_29.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/04_lip_reading.mp3"), filename: "lip_reading.mp3")
# track_30.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/05_im_not_yours.mp3"), filename: "im_not_yours.mp3")
# track_31.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/06_i_love_i_embrace.mp3"), filename: "i_love_i_embrace.mp3")
# track_32.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/07_miss_trouble.mp3"), filename: "miss_trouble.mp3")
# track_33.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/08_phony_queen.mp3"), filename: "phony_queen.mp3")
# track_34.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/09_the_third_person_and_i.mp3"), filename: "the_third_person_and_i.mp3")
# track_35.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/10_were_all_different_yet_the_same.mp3"), filename: "were_all_different_yet_the_same.mp3")

# REAL TRACKS SEEDS HERE
track_1.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/01_jam.mp3"), filename: "jam.mp3")
track_2.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/02_why_you_wanna_trip_on_me.mp3"), filename: "why_you_wanna_trip_on_me.mp3")
track_3.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/03_in_the_closet.mp3"), filename: "in_the_closet.mp3")
track_4.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/04_she_drives_me_wild.mp3"), filename: "she_drives_me_wild.mp3")
track_5.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/05_remember_the_time.mp3"), filename: "remember_the_time.mp3")
track_6.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/06_cant_let_her_get_away.mp3"), filename: "cant_let_her_get_away.mp3")
track_7.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/07_heal_the_world.mp3"), filename: "heal_the_world.mp3")
track_8.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/08_black_or_white.mp3"), filename: "black_or_white.mp3")
track_9.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/09_who_is_it.mp3"), filename: "who_is_it.mp3")
track_10.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/10_give_in_to_me.mp3"), filename: "give_in_to_me.mp3")
track_11.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/11_will_you_be_there.mp3"), filename: "will_you_be_there.mp3")
track_12.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/12_keep_the_faith.mp3"), filename: "keep_the_faith.mp3")
track_13.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/13_gone_too_soon.mp3"), filename: "gone_too_soon.mp3")
track_14.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/14_dangerous.mp3"), filename: "dangerous.mp3")

track_15.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/01_necessary_evil.mp3"), filename: "necessary_evil.mp3")
track_16.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/02_womxnly.mp3"), filename: "womxnly.mp3")
track_17.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/03_ugly_beauty.mp3"), filename: "ugly_beauty.mp3")
track_18.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/04_karma.mp3"), filename: "karma.mp3")
track_19.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/05_lady_in_red.mp3"), filename: "lady_in_red.mp3")
track_20.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/06_sweet_guilty_pleasure.mp3"), filename: "sweet_guilty_pleasure.mp3")
track_21.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/07_romance.mp3"), filename: "romance.mp3")
track_22.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/08_vulnerability.mp3"), filename: "vulnerability.mp3")
track_23.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/09_hubby.mp3"), filename: "hubby.mp3")
track_24.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/10_life_sucks.mp3"), filename: "life_sucks.mp3")
track_25.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/11_shadow_self.mp3"), filename: "shadow_self.mp3")

track_26.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/01_gentlewomen.mp3"), filename: "gentlewomen.mp3")
track_27.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/02_play.mp3"), filename: "play.mp3")
track_28.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/03_medusa.mp3"), filename: "medusa.mp3")
track_29.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/04_lip_reading.mp3"), filename: "lip_reading.mp3")
track_30.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/05_im_not_yours.mp3"), filename: "im_not_yours.mp3")
track_31.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/06_i_love_i_embrace.mp3"), filename: "i_love_i_embrace.mp3")
track_32.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/07_miss_trouble.mp3"), filename: "miss_trouble.mp3")
track_33.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/08_phony_queen.mp3"), filename: "phony_queen.mp3")
track_34.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/09_the_third_person_and_i.mp3"), filename: "the_third_person_and_i.mp3")
track_35.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/10_were_all_different_yet_the_same.mp3"), filename: "were_all_different_yet_the_same.mp3")
