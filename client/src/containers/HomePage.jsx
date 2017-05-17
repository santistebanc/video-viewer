import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

import cameraIcon from '../../../server/static/img/camera.png';


const HomePage = () => (
  <Card className="container">
    <img src={cameraIcon} style={{paddingTop: '20px'}} />
    <CardTitle title="Video Viewer App" subtitle="Esta es la página principal" />
  </Card>
);

export default HomePage;
