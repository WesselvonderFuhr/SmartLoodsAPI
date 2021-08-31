const mongoose = require('mongoose');

console.log('Initializing sensors schema');

const SensorsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
    time: {type: Date,required: true},
    assignedTo: {type: String, required: false}
});

module.exports = Sensors = mongoose.model('Sensors', SensorsSchema);
