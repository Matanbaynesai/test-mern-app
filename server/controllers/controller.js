const studentModel = require('../model/Model')



async function getAllUsers(req, res) {
    try {
        await studentModel.find({}, (err, result) => {
            if (err) throw err;
            res.json({ massage: "seccess", date: result })
            console.log(result);
        })
    } catch (err) {
        res.json({ massage: "db problem", error: err })
    }
}

async function createDocument(req, res) {
    try {
        await studentModel.insertMany(req.body.person , (err, result) => {
            if (err) throw err;
            res.json({ massage: "seccess", date: req.body.person })
            console.log(result);
        })
    } catch (err) {
        res.json({ massage: "db problem", error: err })
    }
}
async function updateDocument(req, res) {
    try {
        await studentModel.findByIdAndUpdate({_id:"610c08a1ac9b8f07f01ecbb4"},{$set:{firstname:req.body.person.firstname}} , (err, result) => {
            if (err) throw err;
            res.json({ massage: "seccess", date: req.body.person })
            console.log(result);
        })
    } catch (err) {
        res.json({ massage: "db problem", error: err })
    }
}
async function deleteDocument(req, res) {
    try {
        await studentModel.findByIdAndDelete({_id:"610c08a1ac9b8f07f01ecbb4"} , (err, result) => {
            if (err) throw err;
            res.json({ massage: "seccess", date: req.body.person })
            console.log(result);
        })
    } catch (err) {
        res.json({ massage: "db problem", error: err })
    }
}
// db.collection(perCollection).updateMany(
    //     {},
    //     { $set: { categories: ["matan", "itzak"] } },
module.exports = {
    getAllUsers,
    createDocument,
    updateDocument,
    deleteDocument
}