import React from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: {}, user: { email: '', password: '' } };
  }
  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  }
  processForm = (event) => {
    event.preventDefault();

    axios.post('/auth/login', {
      email: this.state.user.email,
      password: this.state.user.password
    })
    .then((response) => {
      if(response.data.success){
        console.log('The form is valid');
        this.setState({ errors: {} });
      }else{
        console.log('The form is NOT valid');
        this.setState({ errors: response.data.errors });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
