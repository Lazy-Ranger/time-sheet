const {MANAGER_MODEL} = require('../../../models')
const {NotFoundException,ConflictException} = require('../../../../core/http')

class ManagerAccountService {
    constructor(){
        this.managerModel = MANAGER_MODEL
    }

   async createManager(userRegistrationData){
        // check if user exists
        const isUserExists = await this.managerModel.findOne({email:userRegistrationData.email});
    
        if(isUserExists){
            throw new ConflictException('User already exits')
        }
    
        const createUser = await this.managerModel.create(userRegistrationData)
        return createUser
    }

    async findManagerByEmail (email){
        const isUserExits = await this.managerModel.findOne({email},"+password");
        return isUserExits
    } 
    
    
}


module.exports ={
    ManagerAccountService: new ManagerAccountService()
}