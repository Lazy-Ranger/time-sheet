const {EMPLOYER_MODEl} = require('../../../models');
const {ConflictException} = require('../../../../core/http')

class EmployersAccountService {
    constructor(){
        this.employeModel = EMPLOYER_MODEl
    }

   async createEmploye(userRegistrationData){
        // check if user exists
        const isUserExists = await this.employeModel.findOne({email:userRegistrationData.email});
    
        if(isUserExists){
            throw new ConflictException('User already exists')
        }
    
        const createUser = await this.employeModel.create(userRegistrationData)
        return createUser
    }



    async findManagerByEmail (email){
        const isUserExits = await this.employeModel.findOne({email},"+password");
        return isUserExits
    } 
    
    
}


module.exports ={
    EmployersAccountService: new EmployersAccountService()
}