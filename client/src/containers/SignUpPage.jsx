import React from 'react';
import PropTypes from 'react-proptypes';
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

    const afterRes = (data) => {
      console.log(data.success?'The form is valid':'The form is NOT valid');
      const errorsobj = {...data.errors, summary: data.message};
      this.setState({ errors: (errorsobj || {}) });
      if(data.success){
        localStorage.setItem('successMessage', data.message);
        this.props.history.push('/login');
      }
    }

    axios.post('/auth/signup', {
      name: this.state.user.name,
      email: this.state.user.email,
      password: this.state.user.password
    })
    .then((res) => { afterRes(res.data) })
    .catch((error) => { error.response && afterRes(error.response.data) });
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

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
