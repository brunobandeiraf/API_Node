require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")

const express = require("express")

const routes = require("./routes")

migrationsRun()

const app = express()
app.use(express.json)

app.use(routes)

app.use(( error, request, response, next) => {

    // Se erro gerado pelo cliente
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    // Debugar o error, se preciso
    console.log(error)

    // Se erro gerado pelo servidor
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));