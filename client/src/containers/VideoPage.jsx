import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import videos from '../data.js';

const findVideo = (id) => {
  return videos.find((it)=>it.id==id).src;
}

const VideoPage = ({match}) => (
  <Card className= "container" >
    <CardMedia>
      <video controls autoPlay preload={'auto'}
          className="video-js">
          <source src={findVideo(match.params.id)} type="video/mp4"></source>
        </video>
    </CardMedia>
    <CardTitle title={`Video ${match.params.id}`} subtitle="subtítulo aquí" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default VideoPage;