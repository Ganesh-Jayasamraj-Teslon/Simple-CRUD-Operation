// Node module imports
import express, { Request, Response } from "express"
import cors from "cors"

// Imports from other file
import { SECRET_MONGODB, SECRET_PORT } from "./secret"
import Routes from "./API/Routes"
import mongoose from "mongoose"

// Configure the application and Initating the Database
const app = express()
const PORT = SECRET_PORT
const MONGODB_URL = SECRET_MONGODB

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log(`[SUCCESS] - Connected to MongoDB`);
        console.log(`[MONGO-DB] - ${MONGODB_URL}`);
        
    })
    .catch((err) => {
        console.log(`[FAILED] - Failed to connect to mongodb.\nERROR: ${err}`);
        
    })

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// Testing application
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
})

app.post("/test", (req: Request, res: Response) => {
    const content = req.body
    console.log(content)

    res.send("Received")
})

// Implementing Routes
app.use("/api", Routes)

// Starting the application
app.listen(PORT, () => {
    console.log(`[STARTED] - Application started and listening to the Port: ${PORT}`);
})