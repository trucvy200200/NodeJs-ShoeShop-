import express from "express";
import configViewEngine from "./config/ViewEngine";
const app = express()
const port = 3000

configViewEngine(app);

//set url pattern
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})