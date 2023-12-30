const { db } = require("../database.js");
const Register = db.registers; 

//logout
 module.exports.logoutUser = (req, res) => {
    Register.findOne({ where: { matri_id: req.body.matri_id }}).then((user) => {
        //console.log("user",user);
        if(user) {
            req.session.destroy((err) => {
                res.clearCookie('qid');
                if (err) {
                    console.log(err);     
                    res.status(500).send({
                        message: "some error occurred while logout"                        
                    });           
                    return;
                }        
                res.status(200).send({
                    message: "user logged out successfully"
                });                              
            });
        }else{
            res.status(404).send({
                message: "not logged in"
              });            
        }
    }).catch(err => {
        res.status(500).send({
        message: err.message || "Some error occurred while logout"
        });
    });
}