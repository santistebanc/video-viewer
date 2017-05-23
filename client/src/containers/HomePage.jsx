import React from 'react';
import { Card } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

import cameraIcon from '../../../server/static/img/camera.png';
import Videos from '../components/Videos.jsx';
import SearchBar from '../components/SearchBar.jsx';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 20px'
  },
  searchbar: {
    margin: 'auto 0'
  },
  toggle:{
    margin: 'auto 0'
  }
};



class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {autoplay: true};
  }
  handleClickVideo(id){
    this.props.history.push('video/'+id);
  }
  render() {
    return (
      <Card className= "container" >
        <div style={styles.header} >
          <h2>Videos</h2>
          <div style={styles.toggle}><Toggle label="Autoplay" toggled={this.state.autoplay} onToggle={()=>{this.setState({autoplay: !this.state.autoplay})}}/></div>
          <span style={styles.searchbar}><SearchBar /></span>
        </div>
        <Videos autoplay={this.state.autoplay} onClickVideo={this.handleClickVideo.bind(this)} />
      </Card >
    );
  }
}

export default HomePage;
