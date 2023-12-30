//retrive by query with limited or all attributes
module.exports.findByQuery = (table, req,res) => {
    let { attributes = '', ...query } = req.query;
    console.log("Find by ", JSON.stringify(query), "With attributes", attributes || 'All');
    const options = {};
    options.where = query;
    if (attributes) {
      attributes = attributes.split(',');
      options.attributes = attributes;
    }
    table.findAll(options).then(data => {
      res.send(data);
    }).catch(err => {
       res.status(500).send({
         message: err.message || "some error occurred while fetching data"
       });
    });

  };