const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')
const {initializeDatabase, db} = require('./database');
var session = require('express-session')
var cors = require('cors');
const multer = require('multer');
const upload = multer();
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.single('image')); 
app.use(cors());

const startServer = async () => {
  await initializeDatabase(app);
  require("./routes/country.route")(app);
  require("./routes/state.route")(app);
  require("./routes/religion.route")(app);
  require("./routes/login_logs.route")(app);
  require("./routes/login.route")(app);
  require("./routes/logout.route")(app);
  require("./routes/city.route")(app);
  require("./routes/sms_templete.route")(app);
  require("./routes/email_templates.route")(app);
  require("./routes/sms_utils.route")(app);
  require("./routes/cast.route")(app);

  const port = process.env.SERVER_PORT || 3500
  await promisify(app.listen).bind(app)(port)
  console.log(`Listening on port ${port}`)
}

/* app.use(session({
  name: 'qid',
  cookie: {
    maxAge: 60 * 60 * 24 * 30, // 1 month
    httpOnly: true,
    sameSite: 'lax',
  },
  saveUninitialized: true,
  secret: 'schoolsecret',  
})) */

// middleware to validate user session
app.use((req, res, next) => {
  next();
  // if (req.path !== '/api/register') {
  //   next();
  // } else {    
  //   if (req.session.userId) {
  //     next();
  //   } else {
  //     res.status(403).send({
  //       message: "forbidden"
  //     });
  //   }     
  // }

})

startServer();