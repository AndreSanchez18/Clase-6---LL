const express = require("express")
const funciones = require("./funciones2.js")

const app = express()
app.use(express.json())
PORT = 3000

app.post("/operaciones", (req,res)=>{

    try{
        let result = req.body.map(e=>{
            const funcion = funciones[e.fn]
            if (!funcion) throw new Error("Operacion no soportada")
            return {...e, resultado:funcion(e.op1, e.op2)}
        })

        res.status(201).json(result)

    } catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

app.listen(PORT)