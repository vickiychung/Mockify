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
artist_3 = Artist.create!(name: "Kenshi Yonezu", description: "~3,462,793 monthly listeners")
artist_4 = Artist.create!(name: "BIGBANG", description: "~2,526,380 monthly listeners")
artist_5 = Artist.create!(name: "Kimberley Chen", description: "~404,708 monthly listeners")
artist_6 = Artist.create!(name: "All Sons & Daughters", description: "~629,915 monthly listeners")
artist_7 = Artist.create!(name: "Taylor Swift", description: "~43,349,955 monthly listeners")
artist_8 = Artist.create!(name: "HEIZE", description: "~1,602,979 monthly listeners")

# aws artists seed
# REMEMBER TO CHANGE THESE
# artist_1.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/michael_jackson.jpeg'), filename: "michael_jackson.jpeg")
# artist_2.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/jolin_tsai.jpeg'), filename: "jolin_tsai.jpeg")
# artist_3.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/kenshi_yonezu.jpeg'), filename: "kenshi_yonezu.jpeg")
# artist_4.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/bigbang.jpeg'), filename: "bigbang.jpeg")
# artist_5.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/kimberley_chen.jpeg'), filename: "kimberley_chen.jpeg")
# artist_6.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/all_sons_and_daughters.jpeg'), filename: "all_sons_and_daughters.jpeg")
# artist_7.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/taylor_swift.jpeg'), filename: "taylor_swift.jpeg")
# artist_8.profile_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/artists/heize.jpeg'), filename: "heize.jpeg")

# REAL ARTISTS SEED HERE
artist_1.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/michael_jackson.jpeg"), filename: "michael_jackson.jpeg")
artist_2.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/jolin_tsai.jpeg"), filename: "jolin_tsai.jpeg")
artist_3.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/kenshi_yonezu.jpeg"), filename: "kenshi_yonezu.jpeg")
artist_4.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/bigbang.jpeg"), filename: "bigbang.jpeg")
artist_5.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/kimberley_chen.jpeg"), filename: "kimberley_chen.jpeg")
artist_6.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/all_sons_and_daughters.jpeg"), filename: "all_sons_and_daughters.jpeg")
artist_7.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/taylor_swift.jpeg"), filename: "taylor_swift.jpeg")
artist_8.profile_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/artists/heize.jpeg"), filename: "heize.jpeg")

# albums seed
# REMINDER: Change arist_id after creating artists table
album_1 = Album.create!(artist_id: 1, title: "Dangerous", year: "1991")
album_2 = Album.create!(artist_id: 2, title: "Ugly Beauty", year: "2018")
album_3 = Album.create!(artist_id: 2, title: "Play", year: "2014")
album_4 = Album.create!(artist_id: 3, title: "Lemon", year: "2018")
album_5 = Album.create!(artist_id: 4, title: "M", year: "2015")
album_6 = Album.create!(artist_id: 5, title: "L.O.V.E.S.H.I.T", year: "2020")
album_7 = Album.create!(artist_id: 5, title: "After the Rain", year: "2020")
album_8 = Album.create!(artist_id: 5, title: "4am Calls", year: "2020")
album_9 = Album.create!(artist_id: 6, title: "The Longing", year: "2012")
album_10 = Album.create!(artist_id: 7, title: "Only The Young", year: "2020")
album_11 = Album.create!(artist_id: 7, title: "Today Was A Fairytale", year: "2010")
album_12 = Album.create!(artist_id: 8, title: "/// (You, Clouds Rain)", year: "2017")
album_13 = Album.create!(artist_id: 1, title: "Thriller", year: "1982")
album_14 = Album.create!(artist_id: 2, title: "Stars Align", year: "2021")
album_15 = Album.create!(artist_id: 3, title: "Flamingo", year: "2018")
album_16 = Album.create!(artist_id: 4, title: "A", year: "2015")
album_17 = Album.create!(artist_id: 4, title: "D", year: "2015")
album_18 = Album.create!(artist_id: 4, title: "E", year: "2015")
album_19 = Album.create!(artist_id: 6, title: "Brokenness Aside", year: "2011")
album_20 = Album.create!(artist_id: 8, title: "We don't talk together", year: "2019")

# aws albums seed
# REMEMBER TO CHANGE FILE PATHS BEFORE DEPLOYING TO PROD
# album_1.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_dangerous/dangerous_album_cover.jpeg'), filename: "dangerous_album_cover.jpeg")
# album_2.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_ugly_beauty/ugly_beauty_cover.jpeg'), filename: "ugly_beauty_cover.jpeg")
# album_3.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_play/play_cover.jpeg'), filename: "play_cover.jpeg")
# album_4.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/kenshi_yonezu_lemon/lemon_cover.png'), filename: "lemon_cover.png")
# album_5.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_m/m_cover.jpeg'), filename: "m_cover.jpeg")
# album_6.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/kimberley_chen_loveshit/loveshit_cover.jpeg'), filename: "loveshit_cover.jpeg")
# album_7.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/kimberley_chen_after_the_rain/after_the_rain_cover.png'), filename: "after_the_rain_cover.png")
# album_8.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/kimberley_chen_4am_calls/4am_calls_cover.jpeg'), filename: "4am_calls_cover.jpeg")
# album_9.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_the_longing/the_longing_cover.jpeg'), filename: "the_longing_cover.jpeg")
# album_10.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/taylor_swift_only_the_young/only_the_young_cover.jpeg'), filename: "only_the_young_cover.jpeg")
# album_11.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/taylor_swift_today_was_a_fairytale/today_was_a_fairytale_cover.jpeg'), filename: "today_was_a_fairytale_cover.jpeg")
# album_12.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/heize_you_clouds_rain/you_clouds_rain_cover.jpeg'), filename: "you_clouds_rain_cover.jpeg")
# album_13.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/thriller_cover.jpeg'), filename: "thriller_cover.jpeg")
# album_14.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_stars_align/stars_align_cover.jpeg'), filename: "stars_align_cover.jpeg")
# album_15.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/kenshi_yonezu_flamingo/flamingo_cover.jpeg'), filename: "flamingo_cover.jpeg")
# album_16.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_a/a_cover.jpeg'), filename: "a_cover.jpeg")
# album_17.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_d/d_cover.jpeg'), filename: "d_cover.jpeg")
# album_18.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_e/e_cover.jpeg'), filename: "e_cover.jpeg")
# album_19.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_brokenness_aside/brokenness_aside_cover.jpeg'), filename: "brokenness_aside_cover.jpeg")
# album_20.cover_photo.attach(io: File.open('/Users/vickiychung/Documents/appAcademy/mockify_track_files/heize_we_dont_talk_together/we_dont_talk_together_cover.jpeg'), filename: "we_dont_talk_together_cover.jpeg")

# REAL ALBUMS SEEDS HERE
album_1.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_dangerous/dangerous_album_cover.jpeg"), filename: "dangerous_album_cover.jpeg")
album_2.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_ugly_beauty/ugly_beauty_cover.jpeg"), filename: "ugly_beauty_cover.jpeg")
album_3.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_play/play_cover.jpeg"), filename: "play_cover.jpeg")
album_4.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kenshi_yonezu_lemon/lemon_cover.png"), filename: "lemon_cover.png")
album_5.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_m/m_cover.jpeg"), filename: "m_cover.jpeg")
album_6.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kimberley_chen_loveshit/loveshit_cover.jpeg"), filename: "loveshit_cover.jpeg")
album_7.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kimberley_chen_after_the_rain/after_the_rain_cover.png"), filename: "after_the_rain_cover.png")
album_8.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kimberley_chen_4am_calls/4am_calls_cover.jpeg"), filename: "4am_calls_cover.jpeg")
album_9.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_the_longing/the_longing_cover.jpeg"), filename: "the_longing_cover.jpeg")
album_10.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/taylor_swift_only_the_young/only_the_young_cover.jpeg"), filename: "only_the_young_cover.jpeg")
album_11.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/taylor_swift_today_was_a_fairytale/today_was_a_fairytale_cover.jpeg"), filename: "today_was_a_fairytale_cover.jpeg")
album_12.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/heize_you_clouds_rain/you_clouds_rain_cover.jpeg"), filename: "you_clouds_rain_cover.jpeg")
album_13.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/thriller_cover.jpeg"), filename: "thriller_cover.jpeg")
album_14.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_stars_align/stars_align_cover.jpeg"), filename: "stars_align_cover.jpeg")
album_15.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kenshi_yonezu_flamingo/flamingo_cover.jpeg"), filename: "flamingo_cover.jpeg")
album_16.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_a/a_cover.jpeg"), filename: "a_cover.jpeg")
album_17.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_d/d_cover.jpeg"), filename: "d_cover.jpeg")
album_18.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_e/e_cover.jpeg"), filename: "e_cover.jpeg")
album_19.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_brokenness_aside/brokenness_aside_cover.jpeg"), filename: "brokenness_aside_cover.jpeg")
album_20.cover_photo.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/heize_we_dont_talk_together/we_dont_talk_together_cover.jpeg"), filename: "we_dont_talk_together_cover.jpeg")

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

track_36 = Track.create!(album_id: 4, name: "Lemon", length: 4.16)
track_37 = Track.create!(album_id: 4, name: "Cranberry and Pancake", length: 3.31)
track_38 = Track.create!(album_id: 4, name: "Paper Flower", length: 4.35)

track_39 = Track.create!(album_id: 5, name: "Loser", length: 3.39)
track_40 = Track.create!(album_id: 5, name: "Bae Bae", length: 2.50)

track_41 = Track.create!(album_id: 6, name: "L.O.V.E.S.H.I.T", length: 3.08)
track_42 = Track.create!(album_id: 7, name: "After the Rain", length: 3.09)
track_43 = Track.create!(album_id: 8, name: "4am Calls", length: 3.19)

track_44 = Track.create!(album_id: 9, name: "Oh How I Need You", length: 4.04)
track_45 = Track.create!(album_id: 9, name: "Hear The Sound", length: 4.09)
track_46 = Track.create!(album_id: 9, name: "Rising Sun", length: 5.34)
track_47 = Track.create!(album_id: 9, name: "Called Me Higher", length: 5.55)
track_48 = Track.create!(album_id: 9, name: "We Are Blessed", length: 3.44)
track_49 = Track.create!(album_id: 9, name: "The Longing", length: 3.32)

track_50 = Track.create!(album_id: 10, name: "Only The Young", length: 2.39)
track_51 = Track.create!(album_id: 11, name: "Today Was A Fairytale", length: 4.03)

track_52 = Track.create!(album_id: 12, name: "Don't Know You", length: 3.10)
track_53 = Track.create!(album_id: 12, name: "Dark Clouds", length: 2.48)
track_54 = Track.create!(album_id: 12, name: "rainin' with u", length: 2.16)
track_55 = Track.create!(album_id: 12, name: "You, Clouds, Rain", length: 3.25)
track_56 = Track.create!(album_id: 12, name: "Star (Rain ver.)", length: 3.56)

track_57 = Track.create!(album_id: 13, name: "Wanna Be Startin\' Somethin\'", length: 6.05)
track_58 = Track.create!(album_id: 13, name: "Baby Be Mine", length: 4.22)
track_59 = Track.create!(album_id: 13, name: "The Girl Is Mine", length: 3.44)
track_60 = Track.create!(album_id: 13, name: "Thriller", length: 5.58)
track_61 = Track.create!(album_id: 13, name: "Beat It", length: 4.18)
track_62 = Track.create!(album_id: 13, name: "Billie Jean", length: 4.54)
track_63 = Track.create!(album_id: 13, name: "Human Nature", length: 4.08)
track_64 = Track.create!(album_id: 13, name: "P.Y.T. (Pretty Young Thing)", length: 4.01)
track_65 = Track.create!(album_id: 13, name: "The Lady in My Life", length: 5.02)

track_66 = Track.create!(album_id: 14, name: "Stars Align", length: 2.43)

track_67 = Track.create!(album_id: 15, name: "Flamingo", length: 3.15)
track_68 = Track.create!(album_id: 15, name: "TEENAGE RIOT", length: 3.49)
track_69 = Track.create!(album_id: 15, name: "Gomenne", length: 3.32)

track_70 = Track.create!(album_id: 16, name: "BANG BANG BANG", length: 3.40)
track_71 = Track.create!(album_id: 16, name: "WE LIKE 2 PARTY", length: 3.16)

track_72 = Track.create!(album_id: 17, name: "IF YOU", length: 4.24)
track_73 = Track.create!(album_id: 17, name: "SOBER", length: 3.58)

track_74 = Track.create!(album_id: 18, name: "Zutter", length: 3.18)
track_75 = Track.create!(album_id: 18, name: "Let's Not Fall In Love", length: 3.31)

track_76 = Track.create!(album_id: 19, name: "Alive", length: 2.16)
track_77 = Track.create!(album_id: 19, name: "Let It Shine", length: 4.00)
track_78 = Track.create!(album_id: 19, name: "All the Poor and Powerless", length: 5.43)
track_79 = Track.create!(album_id: 19, name: "Brokenness Aside", length: 5.53)
track_80 = Track.create!(album_id: 19, name: "I Am Set Free", length: 4.50)
track_81 = Track.create!(album_id: 19, name: "Your Glory", length: 6.04)

track_82 = Track.create!(album_id: 20, name: "We don't talk together", length: 3.19)

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

# track_36.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kenshi_yonezu_lemon/01_lemon.mp3"), filename: "lemon.mp3")
# track_37.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kenshi_yonezu_lemon/02_cranberry_and_pancake.mp3"), filename: "cranberry_and_pancake.mp3")
# track_38.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kenshi_yonezu_lemon/03_paper_flower.mp3"), filename: "paper_flower.mp3")

# track_39.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_m/01_loser.mp3"), filename: "loser.mp3")
# track_40.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_m/02_bae_bae.mp3"), filename: "bae_bae.mp3")

# track_41.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kimberley_chen_loveshit/loveshit.mp3"), filename: "loveshit.mp3")
# track_42.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kimberley_chen_after_the_rain/after_the_rain.mp3"), filename: "after_the_rain.mp3")
# track_43.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kimberley_chen_4am_calls/4am_calls.mp3"), filename: "4am_calls.mp3")

# track_44.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_the_longing/01_oh_how_i_need_you.mp3"), filename: "oh_how_i_need_you.mp3")
# track_45.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_the_longing/02_hear_the_sound.mp3"), filename: "hear_the_sound.mp3")
# track_46.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_the_longing/03_rising_sun.mp3"), filename: "rising_sun.mp3")
# track_47.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_the_longing/04_called_me_higher.mp3"), filename: "called_me_higher.mp3")
# track_48.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_the_longing/05_we_are_blessed.mp3"), filename: "we_are_blessed.mp3")
# track_49.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_the_longing/06_the_longing.mp3"), filename: "the_longing.mp3")

# track_50.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/taylor_swift_only_the_young/only_the_young.mp3"), filename: "only_the_young.mp3")
# track_51.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/taylor_swift_today_was_a_fairytale/today_was_a_fairytale.mp3"), filename: "today_was_a_fairytale.mp3")

# track_52.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/heize_you_clouds_rain/01_dont_know_you.mp3"), filename: "dont_know_you.mp3")
# track_53.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/heize_you_clouds_rain/02_dark_clouds.mp3"), filename: "dark_clouds.mp3")
# track_54.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/heize_you_clouds_rain/03_rainin_with_u.mp3"), filename: "rainin_with_u.mp3")
# track_55.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/heize_you_clouds_rain/04_you_clouds_rain.mp3"), filename: "you_clouds_rain.mp3")
# track_56.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/heize_you_clouds_rain/05_star.mp3"), filename: "star.mp3")

# track_57.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/01_wanna_be_startin_somethin.mp3"), filename: "wanna_be_startin_somethin.mp3")
# track_58.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/02_baby_be_mine.mp3"), filename: "baby_be_mine.mp3")
# track_59.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/03_the_girl_is_mine.mp3"), filename: "the_girl_is_mine.mp3")
# track_60.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/04_thriller.mp3"), filename: "thriller.mp3")
# track_61.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/05_beat_it.mp3"), filename: "beat_it.mp3")
# track_62.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/06_billie_jean.mp3"), filename: "billie_jean.mp3")
# track_63.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/07_human_nature.mp3"), filename: "human_nature.mp3")
# track_64.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/08_pyt.mp3"), filename: "pyt.mp3")
# track_65.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/michael_jackson_thriller/09_the_lady_in_my_life.mp3"), filename: "the_lady_in_my_life.mp3")

# track_66.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/jolin_tsai_stars_align/stars_align.mp3"), filename: "stars_align.mp3")

# track_67.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kenshi_yonezu_flamingo/01_flamingo.mp3"), filename: "flamingo.mp3")
# track_68.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kenshi_yonezu_flamingo/02_teenage_riot.mp3"), filename: "teenage_riot.mp3")
# track_69.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/kenshi_yonezu_flamingo/03_gomenne.mp3"), filename: "gomenne.mp3")

# track_70.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_a/01_bang_bang_bang.mp3"), filename: "bang_bang_bang.mp3")
# track_71.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_a/02_we_like_2_party.mp3"), filename: "we_like_2_party.mp3")

# track_72.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_d/01_if_you.mp3"), filename: "if_you.mp3")
# track_73.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_d/02_sober.mp3"), filename: "sober.mp3")

# track_74.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_e/01_zutter.mp3"), filename: "zutter.mp3")
# track_75.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/bigbang_e/02_lets_not_fall_in_love.mp3"), filename: "lets_not_fall_in_love.mp3")

# track_76.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_brokenness_aside/01_alive.mp3"), filename: "alive.mp3")
# track_77.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_brokenness_aside/02_let_it_shine.mp3"), filename: "let_it_shine.mp3")
# track_78.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_brokenness_aside/03_all_the_poor_and_powerless.mp3"), filename: "all_the_poor_and_powerless.mp3")
# track_79.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_brokenness_aside/04_brokenness_aside.mp3"), filename: "brokenness_aside.mp3")
# track_80.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_brokenness_aside/05_i_am_set_free.mp3"), filename: "i_am_set_free.mp3")
# track_81.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/all_sons_and_daughters_brokenness_aside/06_your_glory.mp3"), filename: "your_glory.mp3")

# track_82.track_file.attach(io: File.open("/Users/vickiychung/Documents/appAcademy/mockify_track_files/heize_we_dont_talk_together/we_dont_talk_together.mp3"), filename: "we_dont_talk_together.mp3")

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

track_36.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kenshi_yonezu_lemon/01_lemon.mp3"), filename: "lemon.mp3")
track_37.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kenshi_yonezu_lemon/02_cranberry_and_pancake.mp3"), filename: "cranberry_and_pancake.mp3")
track_38.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kenshi_yonezu_lemon/03_paper_flower.mp3"), filename: "paper_flower.mp3")

track_39.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_m/01_loser.mp3"), filename: "loser.mp3")
track_40.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_m/02_bae_bae.mp3"), filename: "bae_bae.mp3")

track_41.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kimberley_chen_loveshit/loveshit.mp3"), filename: "loveshit.mp3")
track_42.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kimberley_chen_after_the_rain/after_the_rain.mp3"), filename: "after_the_rain.mp3")
track_43.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kimberley_chen_4am_calls/4am_calls.mp3"), filename: "4am_calls.mp3")

track_44.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_the_longing/01_oh_how_i_need_you.mp3"), filename: "oh_how_i_need_you.mp3")
track_45.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_the_longing/02_hear_the_sound.mp3"), filename: "hear_the_sound.mp3")
track_46.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_the_longing/03_rising_sun.mp3"), filename: "rising_sun.mp3")
track_47.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_the_longing/04_called_me_higher.mp3"), filename: "called_me_higher.mp3")
track_48.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_the_longing/05_we_are_blessed.mp3"), filename: "we_are_blessed.mp3")
track_49.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_the_longing/06_the_longing.mp3"), filename: "the_longing.mp3")

track_50.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/taylor_swift_only_the_young/only_the_young.mp3"), filename: "only_the_young.mp3")
track_51.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/taylor_swift_today_was_a_fairytale/today_was_a_fairytale.mp3"), filename: "today_was_a_fairytale.mp3")

track_52.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/heize_you_clouds_rain/01_dont_know_you.mp3"), filename: "dont_know_you.mp3")
track_53.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/heize_you_clouds_rain/02_dark_clouds.mp3"), filename: "dark_clouds.mp3")
track_54.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/heize_you_clouds_rain/03_rainin_with_u.mp3"), filename: "rainin_with_u.mp3")
track_55.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/heize_you_clouds_rain/04_you_clouds_rain.mp3"), filename: "you_clouds_rain.mp3")
track_56.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/heize_you_clouds_rain/05_star.mp3"), filename: "star.mp3")

track_57.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/01_wanna_be_startin_somethin.mp3"), filename: "wanna_be_startin_somethin.mp3")
track_58.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/02_baby_be_mine.mp3"), filename: "baby_be_mine.mp3")
track_59.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/03_the_girl_is_mine.mp3"), filename: "the_girl_is_mine.mp3")
track_60.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/04_thriller.mp3"), filename: "thriller.mp3")
track_61.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/05_beat_it.mp3"), filename: "beat_it.mp3")
track_62.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/06_billie_jean.mp3"), filename: "billie_jean.mp3")
track_63.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/07_human_nature.mp3"), filename: "human_nature.mp3")
track_64.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/08_pyt.mp3"), filename: "pyt.mp3")
track_65.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/michael_jackson_thriller/09_the_lady_in_my_life.mp3"), filename: "the_lady_in_my_life.mp3")

track_66.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/jolin_tsai_stars_align/stars_align.mp3"), filename: "stars_align.mp3")

track_67.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kenshi_yonezu_flamingo/01_flamingo.mp3"), filename: "flamingo.mp3")
track_68.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kenshi_yonezu_flamingo/02_teenage_riot.mp3"), filename: "teenage_riot.mp3")
track_69.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/kenshi_yonezu_flamingo/03_gomenne.mp3"), filename: "gomenne.mp3")

track_70.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_a/01_bang_bang_bang.mp3"), filename: "bang_bang_bang.mp3")
track_71.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_a/02_we_like_2_party.mp3"), filename: "we_like_2_party.mp3")

track_72.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_d/01_if_you.mp3"), filename: "if_you.mp3")
track_73.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_d/02_sober.mp3"), filename: "sober.mp3")

track_74.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_e/01_zutter.mp3"), filename: "zutter.mp3")
track_75.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/bigbang_e/02_lets_not_fall_in_love.mp3"), filename: "lets_not_fall_in_love.mp3")

track_76.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_brokenness_aside/01_alive.mp3"), filename: "01_alive.mp3")
track_77.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_brokenness_aside/02_let_it_shine.mp3"), filename: "02_let_it_shine.mp3")
track_78.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_brokenness_aside/03_all_the_poor_and_powerless.mp3"), filename: "03_all_the_poor_and_powerless.mp3")
track_79.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_brokenness_aside/04_brokenness_aside.mp3"), filename: "04_brokenness_aside.mp3")
track_80.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_brokenness_aside/05_i_am_set_free.mp3"), filename: "05_i_am_set_free.mp3")
track_81.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/all_sons_and_daughters_brokenness_aside/06_your_glory.mp3"), filename: "06_your_glory.mp3")

track_82.track_file.attach(io: URI.open("https://active-storage-mockify-dev.s3-us-west-1.amazonaws.com/heize_we_dont_talk_together/we_dont_talk_together.mp3"), filename: "we_dont_talk_together.mp3")
