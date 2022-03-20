const {Schema,model} = require('mongoose');
const {compare,hash} = require('bcrypt')
const {BCRYPT_CONFIG} = require('../../config')


const MANAGER_SCHEMA_FIELD ={
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select: false,
    },
    department:{
        type:String,
        required:true,
    },
}

const MANAGER_SCHEMA = new Schema(MANAGER_SCHEMA_FIELD);

// hooks
MANAGER_SCHEMA.pre('save',async function(next){
    this.password = await hash(this.password,BCRYPT_CONFIG.ROUNDS);
    next()
})

// methods
MANAGER_SCHEMA.methods.isValidPassword = async function(password){
    const isMatch = await compare(password,this.password);
    return isMatch
}



const MANAGER_COLLECTION = 'managers'
const MANAGER_MODEL = model(MANAGER_COLLECTION,MANAGER_SCHEMA);

module.exports ={
    MANAGER_MODEL
}