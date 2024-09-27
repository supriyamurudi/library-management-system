var mysql=require('mysql');
var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"your_password",
    database:"project"
});
con.connect(function (error) {
    if(error) throw error;
    con.query("select * from student", function (error,result){
        if (error)throw error;
        console.log(result);
    });
});