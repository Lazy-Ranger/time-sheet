const {AuthService} = require('../services/auth.service')
const {httpException,httpOK} = require('../../../../core/http')

class AuthController {
    constructor(){
        this.authService = AuthService;
    }

    registerManager = async (req,res)=>{    
        const createAccountReq = req.body;    
        console.log(createAccountReq)
        try{
            const loggedInUser = await this.authService.createManagerAccount(createAccountReq);
            httpOK(res,loggedInUser)
        }catch(err){
          httpException(res,err,'[AutController] : cannot regiter')
        }
    }

    loginManager = async (req,res)=>{
        
        const accountloginReq = req.body;
        try{
            const loggedInUser = await this.authService.loginManager(accountloginReq);
            httpOK(res,loggedInUser)
        }catch(err){
            httpException(res,err,`[AuthController]: cannot login`)
        }
    }

    registerEmploye = async (req,res)=>{    
        const createAccountReq = req.body;
        try{
            const loggedInUser = await this.authService.createEmployeAccount(createAccountReq);
            httpOK(res,loggedInUser)
        }catch(err){
            httpException(res,err,`[AuthController] : cannot register Employee`)
        }
    }

    loginEmploye = async (req,res)=>{
        const accountloginReq = req.body;
        try{
            const loggedInUser = await this.authService.loginEmploye(accountloginReq);
            httpOK(res,loggedInUser)
        }catch(err){
            httpException(res,err,`[AuthController] : cannot login Employee`)
        }
    }


}


const AUTH_CONTROLLER = new AuthController();

module.exports = {
    AUTH_CONTROLLER
}