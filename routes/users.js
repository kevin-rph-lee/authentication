'use strict';

const express = require('express');
const router  = express.Router();

module.exports = (knex, bcrypt) => {

  //Login route
  router.post('/login', (req, res) => {
    knex
      .select('*')
      .from('users')
      .where({email:req.body.email})
      .then((results) => {
        if(req.body.password === undefined || results.length === 0 || req.body.password.length === 0){
          return res.sendStatus(404);
        } else if (bcrypt.compareSync(req.body.password, results[0].password)) {
          return res.sendStatus(200);
        } else {
          return res.sendStatus(403);
        }
      });
  });

  //Test route that grabs users
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
