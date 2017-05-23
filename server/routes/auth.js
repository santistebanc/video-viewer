const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Porfavor ingresa un email correcto.';
  }
  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Contraseña debe llevar al menos 8 caracteres.';
  }
  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Porfavor ingresa tu nombre.';
  }
  if (!isFormValid) {
    message = 'La forma tiene errores.';
  }
  return { success: isFormValid, message, errors};
}
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Porfavor ingresa tu email';
  }
  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Porfavor ingresa tu contraseña';
  }
  if (!isFormValid) {
    message = 'La forma tiene errores.';
  }
  return { success: isFormValid, message, errors };
}

router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json(validationResult);
  }


  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'La forma tiene errores.',
          errors: {
            email: 'Este email ya ha sido tomado.'
          }
        });
      }

      return res.status(400).json({
        success: false,
        message: 'No se pudo procesar la forma.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Registro exitoso. Ya puedes iniciar sesión.'
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json(validationResult);
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'La forma tiene errores.'
      });
    }


    return res.json({
      success: true,
      message: 'Inicio de sesión exitoso',
      token,
      user: userData
    });
  })(req, res, next);
});


module.exports = router;
