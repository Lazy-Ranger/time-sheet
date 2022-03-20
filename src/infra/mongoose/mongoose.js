const {connect} = require('mongoose');
const {DATABASE_CONFIG} = require('../../config')

class DatabseConnection {
    static async connect(){
        const URL = `mongodb://${DATABASE_CONFIG.HOST}/${DATABASE_CONFIG.NAME}`;
        try{
            return connect(URL)
        }catch(err){
            console.log(err);
            process.exit(1);
        }
    }
}

module.exports ={
    DatabseConnection
}