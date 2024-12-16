import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try{
// connect()  method is present in mongoose packege so we have already install mmongoose package by "npm i mongoose"
  mongoose.connect(URI,
  // While using mongoDb from local we need to write below lines of code
  // If we use MOongoDB from cloud then we do not add below code.
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
  
} catch (error){
 console.log("Error: ", error);
 
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
