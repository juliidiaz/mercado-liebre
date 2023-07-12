const express = require ("express");
const path = require ("path");
const app = express();


app.listen (3030, ()=>console.log("Servidor andando"));
app.use (express.static("public"))
app.get("/", (req, res)=> {console.log(__dirname);
res.sendFile(path.resolve(__dirname, "./views/index.html"))});