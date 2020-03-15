'use strict';

exports.ok = function(values, res) {
  
  if (values!=""){
    var data = {
      'status': 200,
      'responses': values
    };
  } else 
  {
    var data = {
      'status': 404,
      'responses': "No Data"
    };
    res.status(404);
  }
  res.json(data);
  res.end();
};