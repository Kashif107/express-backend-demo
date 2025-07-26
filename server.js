const express = require("express");
const app = express();

// ✅ Serve all files from "public" folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("🚀 Server is working on Render!");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});