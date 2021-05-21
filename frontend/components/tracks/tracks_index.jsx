// //not in use
// import React from 'react';
// import { Link } from 'react-router-dom';
// import TracksIndexItem from './tracks_index_item';
// import WebPlayer from '../web_player/web_player';

// class TracksIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.fetchTracks();
//   }

//   render() {
//     const {
//       tracks, 
//       currentTrack, 
//       playStatus, 
//       togglePlayTrack, 
//       selectTrack, 
//       playNextTrack,
//       playPrevTrack,
//       toggleShuffle,
//       shuffleOn,
//       toggleLoop,
//       loopOn
//     } = this.props;

//     const list = tracks.map(track => <TracksIndexItem
//       key={track.id}
//       track={track}
//       togglePlayTrack={togglePlayTrack}
//       selectTrack={selectTrack}
//     />);

//     return (
//       <div className="home-wrapper">
//         <div className="home-container">
//           <div className="sidebar-container">
//             <p>Sidebarrrr</p>
//           </div>

//           <div className="main-container">
//             <div className="album-photo">
//               <p>album photo can be here</p>
//               <Link to="/">temporary link to go back to home</Link>
//             </div>

//             <ul className="tracks-container">
//               {list}
//             </ul>
//           </div>
//           <br/>
//         </div>

//         <div className="webplayer-container">
//           <WebPlayer
//             currentTrack = {currentTrack}
//             playStatus = {playStatus}
//             togglePlayTrack = {togglePlayTrack}
//             tracks = {tracks}
//             playNextTrack = {playNextTrack}
//             playPrevTrack = {playPrevTrack}
//             toggleShuffle = {toggleShuffle}
//             shuffleOn = {shuffleOn}
//             toggleLoop = {toggleLoop}
//             loopOn = {loopOn}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default TracksIndex;