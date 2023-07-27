const express = require ("express");
const path = require ("path");
const app = express();


const port =process.env.PORT || 3001;
app.listen(port, () =>console.log('Servidor corriendo en el puerto ${port}'));
app.use (express.static("public"));

app.get("/", (req, res)=> {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, "./views/index.html"))});

app.get("/views/register.html", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/views/loguin.html", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, "./views/loguin.html"))
});