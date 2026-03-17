const{Sequelize}=require('sequelize')
//create connection
const sequelize= new Sequelize('testingdb','root','madhuri@123',{
    host:'localhost',
    dialect:'mysql'
});
//test the connection
(async()=>{
    try{
    await sequelize.authenticate()
    console.log("Connection to the database has been created")

}catch(error){
    console.log(error)
}
})()
module.exports=sequelize



















// const mysql=require('mysql2')
// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'madhuri@123',
//     database:'testingdb'
// })
// connection.connect((err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Connection has been created");
//     const creationQuery=`create table IF NOT EXISTS Students(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(25),
//     email VARCHAR(50)
//     )`
//     connection.execute(creationQuery,(err)=>{
//         if(err){
//             console.log(err)
//             connection.end()
//             return
//         }
//         console.log("Table is created")
//     })
// })
// module.exports=connection