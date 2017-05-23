const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "Estás autorizado para ver este mensaje secreto"
  });
});

module.exports = router;