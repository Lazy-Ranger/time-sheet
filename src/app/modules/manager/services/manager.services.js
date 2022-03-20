const {EMPLOYER_MODEl,TIME_SHEET_MODEL,MANAGER_MODEL} = require('../../../models');


class ManagerService {
    constructor(){
        this.employeModel = EMPLOYER_MODEl;
        this.timeSheetModel = TIME_SHEET_MODEL;
        this.managerModel = MANAGER_MODEL
    }

    async getProfileData(userSession){
        const user = await this.managerModel.findOne({_id: userSession._id});
        return user
    }


    async getEmployeesById(managerId){
        const users = await this.employeModel.find({managerId});
        return users
    }

    async getEmployeeTimeStamp(managerId,employeeId){
        // const timeStamp = await this.timeSheetModel.findOne({managerId,employeeId},null,{sort:{_id:-1}});
        const timeStamp = await this.timeSheetModel.findOne({managerId,employeeId})
        console.log(timeStamp);
        return timeStamp || {};
    }

    async ratingEmployeeTimeStamp(reqRatingNumber){

        const {timeSheetId,rating} = reqRatingNumber
        console.log(rating);
        const updateBodyReq = {
            rating,
            isRated:true
        }

        const isUpdated = await this.timeSheetModel.findOneAndUpdate({_id:timeSheetId},{$set:updateBodyReq});
        console.log(isUpdated)
        
        return isUpdated;

    }

}

module.exports ={
    ManagerService: new ManagerService()
}