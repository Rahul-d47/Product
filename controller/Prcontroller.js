const Prschema = require("../model/Product");

const pinsert = async(req,res)=>{
    const {name,des,amt,qty}=req.body
    let cal = amt*qty;
    try {
        const Product = await new Prschema({
            name:name,
            description:des,
            price:amt,
            quantity:qty,
            total:cal
        })
        const savedata = await Product.save();
        console.log("saved")
        res.send(savedata)
        
    } catch (error) {
        console.log(error)
        res.status(404).send("Innternal error",error)
        
    }
}

module.exports= pinsert;