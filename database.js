const { Sequelize, DataTypes } = require('sequelize')
const epilogue = require('epilogue');
const dbconfig = require('./config/db.config.js');
const countryModel = require('./models/country.js');
const stateModel = require('./models/state.js');
const religionModel = require('./models/religion.js');
const loginlogsModel = require('./models/login_logs.js');
const cityModel = require('./models/city.js');
const smsTempModel = require('./models/sms_templete.js');
const emailTempModel = require('./models/email_templates.js');
const casteModel = require('./models/caste.js');
const attendanceModel = require('./models/attendance.js');

const database = new Sequelize(
  dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      acquire: dbconfig.pool.acquire,
      idle: dbconfig.pool.idle
    }
  }
);

const db = {};

const initializeDatabase = async (app) => {
  try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
  
    db.Sequelize = Sequelize;
    db.sequelize = database;
  
    db.countries = countryModel(database);
    db.states = stateModel(database);
    db.religions = religionModel(database);
    db.loginlogs = loginlogsModel(database);
    db.cities = cityModel(database);
    db.smstemp = smsTempModel(database);
    db.emailtemp = emailTempModel(database);
    db.castes = casteModel(database);
    db.attendances = attendanceModel(database);
    
    return db;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { initializeDatabase, db };