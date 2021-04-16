# ![mockify-logo](/app/assets/images/logo_light.png)

[Mockify](https://mockify-app.herokuapp.com/#/) is a clone of the online music streaming app, [Spotify](https://www.spotify.com), with slight twists to incorporate personal style, as well as including some of my favorite music. Users can explore the artists and albums pages available while playing music continouously, and can create their own playlists with songs that they want to come back to again.

## Technologies Used
- **Backend:** PostgreSQL, Ruby on Rails, JBuilder
- **Frontend:** React, Redux, jQuery
- **Media Storage:** AWS S3
- **Hosting:** Heroku

## Web Player
<img width="1752" alt="image" src="https://user-images.githubusercontent.com/72854605/115056838-281ae180-9e98-11eb-9f69-adf37c2a8840.png">

### Plays music continuously

Challenge:
- Have webplayer play continuously and display album cover image and track details while user navigates to different pages.

Solution:
- Separate webplayer component to render it just once, and pass current track/album information to it when a song is selected.

Code Snippet:

<img width="734" alt="image" src="https://user-images.githubusercontent.com/72854605/115057949-84cacc00-9e99-11eb-889c-0ccd7e5b816e.png">
