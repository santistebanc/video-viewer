import React from 'react';
import axios from 'axios';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';


class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secretData: '' };
  }
  componentDidMount() {
    axios.get('/api/dashboard', {
      body: { email: this.state.user.email, password: this.state.user.password },
      headers: { 'Authorization': `bearer ${Auth.getToken()}` }
    })
    .then((res) => { this.setState({ secretData: xhr.response.message }) })
    .catch((error) => { console.log("Error when loading token",error) });
  }
  render() {
    return (<Dashboard secretData={this.state.secretData} />);
  }

}

export default DashboardPage;