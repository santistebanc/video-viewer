import React from 'react';
import axios from 'axios';
import SignUpForm from '../components/SignUpForm.jsx';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: {}, user: { email: '', name: '', password: '' } };
  }
  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  }
  processForm = (event) => {
    event.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.user.name,
      email: this.state.user.email,
      password: this.state.user.password
    })
    .then((response) => {
      console.log(response.data);
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
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default SignUpPage;
