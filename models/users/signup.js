var mysql =	require("../db.js"),
	mysqlPool = mysql.createPool();

 var signup = function(){};

 signup.prototype.addUser = function(req, res, callback){
    var nowDate = new Date().toISOString().slice(0, 19).replace('T', ' '),
    params = [req.body.name, req.body.email, req.body.password, req.body.role, req.body.contact, req.body.gender, req.body.dob, req.body.address],
    feedbackQuery = 'INSERT INTO users (name,email,password,role,contact,gender,dob,address) VALUES (?,?,?,?,?,?,?,?)';
    mysqlPool.getConnection(function(err, connection){
      connection.query(feedbackQuery, params, function(err, rows, fields) {
        if(err){
            connection.release();
            callback(true, null);
        }else{
            connection.release();
            callback(null, true);       
        }
    });
  });
}

module.exports = new signup();