const express = require("express");
const app = express();

// ✅ Serve all files from "public" folder
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
