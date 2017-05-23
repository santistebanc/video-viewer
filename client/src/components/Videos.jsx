import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Auth from '../modules/Auth';
import videos from '../data.js';
import VideoPlayer from './VideoPlayer.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '10px'
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    overflowY: 'auto',
  },
};

class Videos extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClickVideo = (id) => {
    this.props.onClickVideo(id);
  }
  render() {
    return (
      <div style={styles.root}>
        <GridList
      cellHeight={'auto'}
      cols={3}
      style={styles.gridList}
    >
      {videos.map((tile, i) => (
        <GridTile key={i}>
          <VideoPlayer 
          onClick={this.handleClickVideo.bind(this,tile.id)} 
          loop 
          hoverControl 
          autoPlay={this.props.autoplay} 
          preload={'auto'}
          className="video-js"
          src={tile.src}
          />
        </GridTile>
      ))}
    </GridList>
      </div>
    )
  }
}

export default Videos;