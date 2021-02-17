const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

// Middleware
app.use(cors())

app.use(express.json())

// Routes
app.use("/todos", require("./routes/todosRoute"))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`> Server Running on Port ${port}`))
