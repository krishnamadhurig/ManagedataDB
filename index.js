const express=require('express')
const db=require('./utils/db-connection')
const app=express()
app.use(express.json())
const studentRoutes=require('./routes/studentsRoutes')


app.get("/",(req,res)=>{
    res.send("Hello Students")

})
app.use('/students',studentRoutes)
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})