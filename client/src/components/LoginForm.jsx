import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = ({ onSubmit, onChange, errors, successMessage, user }) => (
  <Card className="container text-center">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Iniciar sesión</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

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
          floatingLabelText="Contrseña"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Ingresar" primary />
      </div>

      <CardText>No tienes cuenta? <Link to={'/signup'}>Crear cuenta</Link>.</CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    summary: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.shape({
    summary: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
};

export default LoginForm;
