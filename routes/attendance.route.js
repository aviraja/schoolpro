const attendance = require("../models/attendance.js");

module.exports = app => {

    const attendance = require("../controller/attendance.controller.js");
    var router = require("express").Router();

    //get all attendance
    router.get("/all",attendance.findAll);
    //get all by query
    router.get("/query", attendance.findByQuery);

    app.use('/api/attendance', router);

};