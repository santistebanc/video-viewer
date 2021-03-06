import React from 'react';
import PropTypes from 'react-proptypes';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="Esta página es privada, solo usuarios autenticados entran"
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;