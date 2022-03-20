const {ManagerAccountService} = require('../../manager/services');
const {EmployersAccountService} = require('../../employe/services')
const {JwtService} = require('../../../../core/jwt')


class AuthService {
    constructor(){
        this.managerAccountService = ManagerAccountService;
        this.employerAccountService = EmployersAccountService;
    }

    toJWTPayload(user) {
        return {
          _id: user._id,
          email: user.email,
          managerId:user.managerId,
          profile: {
            name: user.name,
          },
        };
      }
    
      toUserData(user) {
        const userDoc = user.toJSON();
        delete userDoc.password;
        return userDoc;
      }
    

      // Create manager
      
    async createManagerAccount(userRegistrationData){
      
        const createUser = await this.managerAccountService.createManager(userRegistrationData);
  
        // Create session

        return this.createSession(createUser)
    }

    // Crate Employe

    async createEmployeAccount(userRegistrationData){
      const createUser = await this.employerAccountService.createEmploye(userRegistrationData)
      // Create session
      return this.createSession(createUser)
    } 


    // Login manager

    async loginManager(userLoginData){
      // check user exists
      const user = await this.managerAccountService.findManagerByEmail(userLoginData.email);
      console.log(user);

      if(!user){
        throw 'User not found'
      }
      // check password match 
      const isPasswordMatch = await user.isValidPassword(userLoginData.password);

      if(!isPasswordMatch){
        throw 'You are unauthorized'
      }
      // create session
      return this.createSession(user)
    }

    // login employe

    
    async loginEmploye(userLoginData){

      // check user exists
      const user = await this.employerAccountService.findManagerByEmail(userLoginData.email);

      if(!user){
        throw 'User not found'
      }
      // check password match 
      const isPasswordMatch = await user.isValidPassword(userLoginData.password);
      
      if(!isPasswordMatch){
        throw 'You are unauthorized'
      }
      // create session
      return this.createSession(user)
    }
    


    createSession(user) {
        // Token payload prepare
        const jwtPayload = this.toJWTPayload(user);
  
        // Create Token
    
        const token = JwtService.sign(jwtPayload);
    
        // Response
    
        return {
          user: this.toUserData(user),
          token,
        };
      }
}


module.exports = {AuthService:new AuthService()};