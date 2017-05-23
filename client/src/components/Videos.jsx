import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Auth from '../modules/Auth';
import videos from '../data.js';

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
    this.videoelements = [];
  }
  handleMouseEnter = (e) => {
    !this.props.autoplay && e.target.play();
  }
  handleMouseLeave = (e) => {
    !this.props.autoplay && e.target.pause();
  }
  handleClickVideo = (id) => {
    this.props.onClickVideo(id);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.autoplay){
      this.videoelements.forEach((vid)=>{
        vid.play();
      })
    }else{
      this.videoelements.forEach((vid)=>{
        vid.pause();
      })
    }
  }
  render() {
    console.log(this.props.autoplay)
    return (
      <div style={styles.root}>
        <GridList
      cellHeight={'auto'}
      cols={3}
      style={styles.gridList}
    >
      {videos.map((tile, i) => (
        <GridTile key={i}>
          <video ref={(video) => { this.videoelements[i] = video; }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClickVideo.bind(this,tile.id)} 
          loop 
          autoPlay={this.props.autoplay} 
          preload={'auto'}
          className="video-js">
          <source src={tile.src} type="video/mp4"></source>
        </video>
        </GridTile>
      ))}
    </GridList>
      </div>
    )
  }
}

export default Videos;