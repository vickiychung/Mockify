import React from 'react';

class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }
  
  render() {
    const { tracks } = this.props;
    
    return (
      
    )
  }
}

export default TracksIndex;