

const db=require('../utils/db-connection')
const Student=require('../models/studentTable')
    
        const addEntries = async (req, res) => {
            try{
        const {name,email}=req.body;
        const student=await Student.create({
            name:name,
            email:email
        });
        res.status(201).send(`user with name:${name} has been created`)
    
 } catch(error){
        res.status(500).send(`Unable to make an entry.`)
 }

 }




//     if (!req.body) {
//         return res.status(400).send("Request body is missing");
//     }

//     const { name, email } = req.body;

//     if (!name || !email) {
//         return res.status(400).send("Name and email are required");
//     }

//     const insertQuery = `INSERT INTO Students(name,email) VALUES(?,?)`;

//     db.execute(insertQuery, [name, email], (err) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send(err.message);
//         }

//         console.log("Value has been added");
//         res.status(200).send(`Student with name ${name} successfully added`);
//     });
// };
const updateEntry= async(req,res)=>{
    try{
    const{id}=req.params;
    const{name,email}=req.body;
    const student= await Student.findByPk(id);
    if(!student){
        return res.status(404).send('Student not found')
    }
    student.name=name;
    await student.save()
    res.status(200).send("Student has been updated")
    
    }catch(error){
        res.status(500).send('Student cant be updated')

    }
    
}
//     const updateQuery="UPDATE Students set name=?, email=? WHERE id=?";
//     db.execute(updateQuery,[name,email,id],(err,result)=>{
//         if(err){
//             console.log(err.message)
//             return res.status(500).send(err.message)
//         }
//         if(result.affectedRows===0){
//             res.status(404).send("Student not found")
//             return;
//         }
//         res.status(200).send("Student has been updated")
//     })
// }

const deleteEntry=async (req,res)=>{
    try{
        const {id}=req.params;
        const student=await Student.destroy({
            where:{
                id:id
            }
        })
        if(!student){
            return res.status(404).send('Student not found')
        }
        res.status(200).send('Student has been deleted')
    }catch(error){
        console.log(error)
        res.status(500).send('Error has detected')

    }
}
//     const deleteQuery=`DELETE FROM Students WHERE id=?`;
//     db.execute(deleteQuery,[id],(err,results)=>{
//         if(err){
//             console.log(err.message)
//             return res.status(500).send(err.message)
//         }
//         if(results.affectedRows===0){
//             return res.status(404).send("Student not found")
//         }
//         res.status(200).send('Student Sucussfully deleted')
//     })
// }


module.exports={
    addEntries,
    updateEntry,
    deleteEntry
}