// This is a model file.

const mongoose = require('mongoose');

var Todo = mongoose.model('Todos', { // 'Todo' is the name of the model.
    text:{
        type:String,
        required:true,
        minlength:1,
        trim: true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports = {Todo};
