

const db=require('../utils/db-connection')
    const addEntries = (req, res) => {

    if (!req.body) {
        return res.status(400).send("Request body is missing");
    }

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }

    const insertQuery = `INSERT INTO Students(name,email) VALUES(?,?)`;

    db.execute(insertQuery, [name, email], (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err.message);
        }

        console.log("Value has been added");
        res.status(200).send(`Student with name ${name} successfully added`);
    });
};
const updateEntry=(req,res)=>{
    const{id}=req.params;
    const{name,email}=req.body;
    const updateQuery="UPDATE Students set name=?, email=? WHERE id=?";
    db.execute(updateQuery,[name,email,id],(err,result)=>{
        if(err){
            console.log(err.message)
            return res.status(500).send(err.message)
        }
        if(result.affectedRows===0){
            res.status(404).send("Student not found")
            return;
        }
        res.status(200).send("Student has been updated")
    })
}
const deleteEntry=(req,res)=>{
    const {id}=req.params;
    const deleteQuery=`DELETE FROM Students WHERE id=?`;
    db.execute(deleteQuery,[id],(err,results)=>{
        if(err){
            console.log(err.message)
            return res.status(500).send(err.message)
        }
        if(results.affectedRows===0){
            return res.status(404).send("Student not found")
        }
        res.status(200).send('Student Sucussfully deleted')
    })
}


module.exports={
    addEntries,
    updateEntry,
    deleteEntry
}