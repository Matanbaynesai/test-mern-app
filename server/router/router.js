const express = require("express");
const myRouter = express.Router();
const model = require("../controllers/controller");

myRouter.get("/", model.getAllUsers);
myRouter.post("/", model.createDocument);
// myRouter.put("/", model.updateDocument);
// myRouter.delete("/", model.deleteDocument);


module.exports = myRouter;
