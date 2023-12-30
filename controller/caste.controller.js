const { db } = require("../database.js");
const { findByQuery } = require("./common.controller");

const Caste = db.castes; 

//find all approved
module.exports.findAllApproved = (req, res) => {
    console.log("all approved castes"); 
    Caste.findAll({ where: { status: 'APPROVED' } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error occurred while retrieving approved castes."
        });
      });
}

module.exports.findByQuery = (req, res) => {
  return findByQuery(Caste, req, res);
}
  