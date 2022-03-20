const {Schema,model} = require('mongoose');
const {compare,hash} = require('bcrypt')
const {BCRYPT_CONFIG} = require('../../config')

const EMPLOYE_SCHEMA_FIELD ={
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        selected:false
    },
    managerId:{
        type:String,
        required:true
    }
}


const EMPLOYE_SCHEMA =  new Schema(EMPLOYE_SCHEMA_FIELD);


// hooks
EMPLOYE_SCHEMA.pre('save',async function(next){
    this.password = await hash(this.password,BCRYPT_CONFIG.ROUNDS);
    next()
})

// methods
EMPLOYE_SCHEMA.methods.isValidPassword = async function(password){
    const isMatch = await compare(password, this.password);
    return isMatch
}

const EMPLOYER_COLLECTION = 'employer';

const EMPLOYER_MODEl = model(EMPLOYER_COLLECTION,EMPLOYE_SCHEMA);


module.exports={
    EMPLOYER_MODEl,
    EMPLOYER_COLLECTION
}