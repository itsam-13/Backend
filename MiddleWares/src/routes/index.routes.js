const express = require('express')

const router = express.Router()

router.use((req,res,next)=>{
    console.log("between router and api");
    next()
    
})

router.get('/',(req,res)=>{
    res.json({
        message: "Hola Amigo!"
    })
})



module.exports = router 