/* eslint no-console: 0 */

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const cors = require('cors');
let request = require('request');

var api_url = "https://api.vdocipher.com/v2/";
var secret_key = "27157325160ce094e59c4b2482db5878ea57dadd42b2aea06a0d44c229bbd27d";

// connect to the database and load models
require('./server/models').connect(config.dbUri);

const app = express();

//use cors
app.use(cors());

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/server/static/index.html');
});

app.post('/video', function(req, res){
  request.post({ url: api_url + "otp", qs: { video : req.body.video }, form: { clientSecretKey : secret_key } },
  function(error, response, body){
		if (error){
      send(error);
			return false;
		}
    if (response.statusCode !== 200) {
      send(response);
			return false;
    }
		  res.json(JSON.parse(body));
	});
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
