'use strict';

const express = require('express');
const router  = express.Router();

module.exports = (knex, bcrypt) => {

  router.get('/', (req, res) => {
    knex
      .select('*')
      .from('users')
      .then((results) => {
        res.send(results);
        // res.sendStats(300)
      });
  });

  return router;
}
