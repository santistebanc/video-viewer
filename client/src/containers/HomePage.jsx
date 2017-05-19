import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

import cameraIcon from '../../../server/static/img/camera.png';
import Videos from '../components/Videos.jsx';

const HomePage = () => (
  <Card className="container">
    {/*<video width="512" height="288" controls="controls">
      <source src="https://www.dropbox.com/s/3uezvb0v8rp73eg/Earth_Spin_Medium.mp4?dl=1" type="video/mp4" />
    </video>*/}
    <Videos/>
    <CardTitle title="Video Viewer App" subtitle="Esta es la página principal" />
  </Card>
);

export default HomePage;
