const { Model } = require("sequelize");
const { DataTypes} = require("sequelize");

module.exports = (sequelize) =>{

    const Attendance = sequelize.define(
        'attendance',
        {
            attendance_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true  
            },
            student_id: {
                type: DataTypes.INTEGER
            },
            attendance_time: {
                type: DataTypes.DATE
            },
            attendance_type: {
                type: DataTypes.STRING
            },
            attendance_status: {
                type: DataTypes.STRING
            }
        },

        {
            freezeTableName: true,
            timestamps: false,
        }
    );

    return Attendance;
}