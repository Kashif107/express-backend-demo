const express = require("express");
const app = express();

const path = require("path");

// 👇 Serve main static site at "/"
app.use(express.static("public"));


// 👇 Serve calculator page at "/calculator"
app.use("/calculator-site", express.static(path.join(__dirname, "calculator-site")));
// ✅ Serve all files from "public" folder

app.use(express.json());

app.post('/api/login',(req,res)=>{
    const {username ,password}=req.body;
    if(username==="john" && password === "1234"){
        console.log("login successful");
        res.json({success:true ,message:"login successful", redirect: "/calculator-site"}); // Add redirect URL here
    }
    else{
        console.log("login failed");
        res.json({success:false ,message:"login failed"});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});