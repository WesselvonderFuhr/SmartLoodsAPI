const express = require('express');
var router = express.Router();
let Sensor = require('../MongoDB/Sensors');



router.get('/', async function (req, res) {
   await Sensor.find({}).sort('-time').exec((err, docs) => { return res.status(200).json(docs[0]); });    
});

router.post('/', async function (req, res) {  

    if(req.body.name == null || req.body.value == null){
        return res.status(400).json("correct parameters not given");
    }
    let sensor = {
        "name" : req.body.name,
        "value" : req.body.value,
        "time" : new Date()
    };

    let sensorModel = new Sensor(sensor);
    await sensorModel.save();
    return res.status(200).json(sensorModel);
});



module.exports = router;
