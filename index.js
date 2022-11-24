const express=require("express")
const app=express()
const port=4000
const cors=require("cors")
const students=require("./data.js")
const emp={id:1,name:"user1",position:"CEO"}


app.use(cors())

app.get("/",(req,res)=>{
	res.send("Hi this is new server")
})
app.get("/user",(req,res)=>{
	res.send("employees data")

})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("Server started"))