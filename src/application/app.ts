import express from "express"
import { publicRouter } from "../routers/public-router"
import { errorMiddleWare } from "../middlewares/error-middleware"

const app = express()
app.use(express.json())
app.use(publicRouter)
app.use(errorMiddleWare)

export default app