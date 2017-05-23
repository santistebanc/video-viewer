import React from 'react';
import videojs from 'video.js'

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    const options = this.props;
    // instantiate video.js
    this.player = videojs(this.videoNode, options, function onPlayerReady() {
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  handleMouseEnter = (e) => {
    this.props.hoverControl && !this.props.autoPlay && e.target.play();
  }
  handleMouseLeave = (e) => {
    this.props.hoverControl && !this.props.autoPlay && e.target.pause();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.autoPlay){
        this.videoNode.play();
    }else{
        this.videoNode.pause();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    const passedprops = { ...this.props }
    delete passedprops.hoverControl;
    delete passedprops.sources;
    delete passedprops.fluid;
    return (
      <div data-vjs-player>
        <video ref={ node => this.videoNode = node } 
          className="video-js" 
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave} 
          data-setup={'{ "controlBar": { "volumeMenuButton": false } }'} 
          { ...passedprops }
          ></video>
      </div>
    )
  }
}