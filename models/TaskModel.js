const {Schema, model} = require('mongoose')

const TaskSchema = new Schema({
    title: { type:String, required:true },
    description: { type:String, required:true },
    category: { type:String, required:true },
    priority: { type:String, required:true },
    status: { type:String, required:true },
})

module.exports = model('Task', TaskSchema)