// const express = require("express")
// const operaciones = require("./operaciones")

// const app = express()
// PORT = 3000

// app.use(express.json())

// app.post("/operaciones", (req, res) =>{
//     const operation_list = req.body
//     let results = []

//     operation_list.forEach(e => {
//         results.push({
//             "op1":e.op1,
//             "op2":e.op2,
//             "fn":e.fn,
//             "result":operaciones[e.fn](e.op1, e.op2)
//         })
//     });

//     res.json(results)
    
// })

// app.listen(PORT)


const express = require("express")
const funciones = require("./funciones.js")

const app = express()
app.use(express.json())
PORT = 3000

app.post("/operaciones", (req,res)=>{
    let result = req.body.map(e=>{
        const funcion = funciones.find(o=>o.name==e.fn)
        return {...e, resultado:funcion.value(e.op1, e.op2)}
    })

    res.status(201).json(result)
})

app.listen(PORT)