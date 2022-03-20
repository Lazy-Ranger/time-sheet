const {Schema,model} = require('mongoose');

const TIME_SHEET_SCHEMA_FIELD ={
    employeeId:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    remark:{
        type:String,
        required:true
    },
    project:{
        type:String,
    },
    rating:{
        type:String,
        enum:[1,2,3,4,5]
    },
    isRated:{
        type:String,
        enum:[true,false],
        default:false
    },
    managerId:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    }
}

const TIME_SHEET_SCHEMA = new Schema(TIME_SHEET_SCHEMA_FIELD);


const TIME_SHEET_COLLECTION = 'timesheet';

const TIME_SHEET_MODEL = model(TIME_SHEET_COLLECTION,TIME_SHEET_SCHEMA);


module.exports ={
    TIME_SHEET_COLLECTION,
    TIME_SHEET_MODEL
}


