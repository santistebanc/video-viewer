import React from 'react';
import axios from 'axios';
import Auth from '../modules/Auth';

import cameraIcon from '../../../server/static/img/camera.png';

// import request from 'request';

const TheVideo = ({otp}) => (
  <div id={"vdo"+otp} style={{height:'400px', width:'640px', maxWidth:'100%', margin: '0 auto'}} />
);

const video_id = "275a21943cce028856f8adc27e5b0801";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { otp: '' };
  }
  componentDidMount() {
    axios.post('/video', {video: video_id})
    .then((res) => { 
      this.setState({ otp: res.data.otp });
      window.vdo.add({ o: res.data.otp });
     })
    .catch((error) => { console.log("Error when loading the video",error) });
  }
  render() {
    return (<TheVideo otp={this.state.otp} />);
  }

}

export default Videos;