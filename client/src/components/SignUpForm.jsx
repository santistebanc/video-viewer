import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
  <Card className="container text-center">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Registro de usuario</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Nombre"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Contraseña"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Crear cuenta nueva" primary />
      </div>

      <CardText>Ya tienes cuenta? <Link to={'/login'}>Iniciar sesión</Link></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    summary: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  user: PropTypes.shape({
    summary: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
};

export default SignUpForm;
