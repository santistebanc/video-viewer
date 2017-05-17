import React from 'react';
import PropTypes from 'react-proptypes';
import axios from 'axios';
import LoginForm from '../components/LoginForm.jsx';
import Auth from '../modules/Auth';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.state = { errors: {}, successMessage, user: { email: '', password: '' } };
  }
  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  }
  processForm = (event) => {
    event.preventDefault();
    
    const afterRes = (data) => {
      console.log(data.success?'The form is valid':'The form is NOT valid');
      const errorsobj = {...data.errors, summary: data.message};
      this.setState({ errors: (errorsobj || {}) });
      if(data.success){
        Auth.authenticateUser(data.token);
        this.props.history.push('/');
      }
    }

    axios.post('/auth/login', {
      email: this.state.user.email,
      password: this.state.user.password
    })
    .then((res) => { afterRes(res.data) })
    .catch((error) => { error.response && afterRes(error.response.data) });
  }
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;
