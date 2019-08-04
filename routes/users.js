'use strict';

const express = require('express');
const router  = express.Router();


//Middle ware that checks tokens
let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return true
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return false
  }
};

module.exports = (knex, bcrypt, jwt, SECRET) => {

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

          let token = jwt.sign({email:req.body.email},
            SECRET,
            { expiresIn: '24h' // expires in 24 hours
            }
          );
          return res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
          });

        } else {
          return res.sendStatus(403);
        }
      });
  });

  //Token check example
  router.get('/authentication', checkToken, (req, res) => {
      if(checkToken){
        return true
      } else {
        return false
      }
  })


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
