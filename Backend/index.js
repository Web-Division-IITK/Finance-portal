const express = require("express");
const cors =require('cors')
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({msg:"Hello from server"})
})
app.post("/submit",(req,res)=>{
  console.log(req.body);
  res.sendStatus(200)
})

app.listen(port, (req,res) =>{
  console.log(`server is listening on http://localhost:${port}`)
} )