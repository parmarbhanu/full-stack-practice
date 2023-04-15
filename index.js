const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: [
       "http://localhost:3000",
    ],
     credentials: true,
   })
);

// connect to mongoDB
  mongoose.set('strictQuery', false)
  mongoose.connect(process.env.MDB_CONNECT) 
  .then(()=>{console.log('Mongodb connected succesfully')});


//  set up routes
app.use("/", require("./Router/UserRouter"));
// app.use("/",require("./Router/QuestionRouter"))



app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
const path=require("path");


// app.use(express.static('client/public'));
//  app.get('*', (req, res) => {
//     res.sendFile(path.resolve('client','public','index.html'));
// });
    

// app.use(express.static('client/build'));
//  app.get('*', (req, res) => {
//     res.sendFile(path.resolve('client','build','index.html'));
// });
    













// default router
// app.get("/", (req, res) => {
//     res.json("bhanupratap parmar");
//     console.log("hiii")
// });
// app.put('/', (req, res) => {
//   res.send('hello world')
// })


// npm i dotenv
// npm i mongoose
// npm i cors
// npm i express