const { db } = require('../database.js');
const { findByQuery } = require("../controller/common.controller.js");

const Attendance = db.attendances;

//create attendance
module.exports.create = (req, res) => {

    // Validate request
      if (!req.body.attendance_id) {
        res.status(400).send({
          message: "attendance id can not be empty!"
        });
        return;
      }
      
      if (!req.body.student_id) {
          res.status(400).send({
            message: "student_id can not be empty!"
          });
          return;
      }    
  
      //create city
      const attendance = {
          attendance_id: req.body.attendance_id,
          country_code: req.body.student_id,
          attendance_time: req.body.attendance_time,
          attendance_type: req.body.attendance_type,
          attendance_status: req.body.attendance_status
      }
  
      //save attendance in database    
      City.create(city).then(data=> {
          res.send(data)
      }).catch(err => {
             res.status(500).send({
             message: err.message || "Some error occurred while saving the attendance"
      });
  
    });
    
  }  

//retrieve attendance
module.exports.findAll = (req, res) => {
    console.log("all attendance"); 
    State.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error occurred while retrieving attendance."
        });

      });

}

//find by Query
module.exports.findByQuery = (req, res) => {
  return findByQuery(Attendance, req, res);
}