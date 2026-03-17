const express=require('express')
const db=require('./utils/db-connection')
const app=express()
app.use(express.json())
const studentRoutes=require('./routes/studentsRoutes')


app.get("/",(req,res)=>{
    res.send("Hello Students")

})
app.use('/students',studentRoutes)
db.sync({force:true}).then(()=>{
    app.listen(5000,()=>{
    console.log("server is running on port 5000")
    })

    }).catch((error)=>{
        console.log(error)

    })

