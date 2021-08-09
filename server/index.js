const express = require('express');
// const mongodb = require("mongodb").MongoClient;
// const mongo = require("mongodb");
const myRouter = require("./router/router");
const db = require("./DB");
const app = express();
const zobi = require("cors");
const mongoUrl = process.env.MONGOURL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(zobi());
db.on("error", () => {
  console.log("error");
});

app.get("/", () => {
  console.log("you conected to the server");
});
app.listen(8999, () => {
  console.log("server is up on port 8999");
});
app.use("/test", myRouter);
// create connection

// mongodb.connect(mongoUrl, (err, con) => {
//   if (err) throw err;
//   console.log("daba created");
//   const db = con.db("blog");
//   db.createCollection("perso n", (err, res) => {
//     if (err) throw err;
//     console.log("connection created");
//     con.close();
//   });
// });
// const perCollection = "person";
// const stuCollection = "students";

// function connectAndAdd(resFromGet){
// return mongodb.connect(mongoUrl, (error, result) => {
// if (error) console.log(error);
//   const studentCollection = result.db("dragonBall").collection("students");

//   const document = [
//     { name: "kineret", lastname: "asayen", age: 25 },
//     { name: "hen", lastname: "zauda", age: 26 },
//     { name: "yoni", lastname: "bitao", age: 25 },
//   ];
//   studentCollection.insertMany(document, (err, result) => {
//     if (err) throw new err();
//     resFromGet.send(result);
//     console.log(result);
//   });
// });
//insert

// mongodb.connect(mongoUrl, (err, con) => {
//   if (err) throw err;
//   console.log("daba created");
//   const db = con.db("blog");
//   const myObj = [
//     { name: "kineret", lastname: "asayen", age: 25 },
//     { name: "hen", lastname: "zauda", age: 26 },
//     { name: "yoni", lastname: "bitao", age: 25 },
//   ];
//   db.collection(perCollection).insertMany(myObj, (err, res) => {
//     if (err) throw err;
//     console.log("data inserted");
//     con.close();
//   });
// });
//find one

// mongodb.connect(mongoUrl, (err, con) => {
//   if (err) throw err;
//   console.log("daba created");
//   const db = con.db("blog");
//   db.collection("student").findOne({ name: "yoda" }, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     con.close();
//   });
// });
//find
// mongodb.connect(mongoUrl, (err, con) => {
//     if (err) throw err;
//     console.log("you are in");
//     const db = con.db("blog")
//     db.collection(perCollection).find({age: {$gt:20}}).toArray((err, res) => {
//       if (err) throw err;
//       console.log(res);
//       con.close();
//     });
// });
//find in ranges
// mongodb.connect(mongoUrl, (err, con) => {
//   if (err) throw err;
//   console.log("you are in");
//   const db = con.db("blog");
//   db.collection(perCollection)
//     .find({ age: { $gt: 40 } }, { age: { $it: 60 } })
//     .toArray((err, res) => {
//       if (err) throw err;
//       console.log(res);
//       con.close();
//     });
// });

//delete
// mongodb.connect(mongoUrl, (err, con) => {
//     if (err) throw err;
//     console.log("you are in");
//     const db = con.db("blog");
//     db.collection(perCollection)
//       .deleteOne( {_id:new mongo.ObjectId("610937839d587a0d98e3964a")},(err, res) => {
//         if (err) throw err;
//         console.log(res);
//         con.close();
//       });
//   });

//update collection

// mongodb.connect(mongoUrl, (err, con) => {
//     if (err) throw err;
//     console.log("you are in");
//     const db = con.db("blog");
//     db.collection(perCollection)
//       .updateOne({age:26},{$set:{age:30}},(err, res) => {
//         if (err) throw err;
//         console.log(res);
//         con.close();
//       });
//   });
//find and sort
// mongodb.connect(mongoUrl, (err, con) => {
//     if (err) throw err;
//     console.log("you are in");
//     const db = con.db("blog");
//     db.collection(perCollection).find().sort({age:1}).toArray((err, res) => {
//         if (err) throw err;
//         console.log(res);
//         con.close();
//       });
//   });
// mongodb.connect(mongoUrl, (err, con) => {
//     if (err) throw err;
//     console.log("you are in");
//     const db = con.db("blog");
//     db.collection(perCollection).find().count((err, res) => {
//         if (err) throw err;
//         console.log(res);
//         con.close();
//       });
//   });
// mongodb.connect(mongoUrl, (err, con) => {
//   if (err) throw err;
//   console.log("you are in");
//   const db = con.db("blog");
//   db.collection(perCollection).updateMany(
//     {},
//     { $set: { categories: ["matan", "itzak"] } },
//     (err, res) => {
//       if (err) throw err;
//       console.log(res);
//       con.close();
//     }
//   );
// });

// app.get("/page", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });
// app.listen(8888, () => {
//   console.log("Application listening on port 8888!");
// });
