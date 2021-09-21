import express from 'express'
import morgan from 'morgan'
import fs from 'fs'

const file = fs.readFileSync('./data.json');
const app = express()

const data = JSON.parse(file.toString())

app.use(morgan("combined"));
app.use(express.static("www"));

app.use("/", express.static("www"));
app.get("/api", (req, res) => res.json(data));

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on Port ${port}`)
})
