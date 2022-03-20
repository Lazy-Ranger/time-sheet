const { ConflictException, NotFoundException } = require('../../../../core/http');
const {TIME_SHEET_MODEL} = require('../../../models');

class EmployeService {
    constructor(){
        this.employeService = TIME_SHEET_MODEL
    }

    async postTimeSheet(employerSession, timeSheetBody){
        const {date,project,description,time,remark} = timeSheetBody;
        const {managerId,_id} = employerSession

        const isTimeSheetCreateToday = await this.employeService.findOne({date,employeeId:_id});


        if(isTimeSheetCreateToday && isTimeSheetCreateToday.date === date){
            throw new ConflictException('Already submit time sheet today')
        }
        console.log('Hello')
        const timeSheetData ={
            date,
            project,
            description,
            remark,
            time,
            employeeId:_id,
            managerId
        }
        const data = await this.employeService.create(timeSheetData);
        console.log(data);
        return data
    }

    async getTimeSheet(userId){
        const data = await this.employeService.findOne({employeeId:userId }, null, { sort: { _id: -1 } });
        return data
    }

    
    async updateTimeSheetById(employeeId,updateReq){
        
        const data = await this.employeService.findOne({employeeId}, null, { sort: { _id: -1 } });
        
        if(data.isRated ===true || data === null){
            throw new ConflictException(`User already exits`)
        }
        
        if(updateReq.isRated || updateReq.rating){
            delete updateReq.isRated,
            delete updateReq.rating
        }

        const updatedated = await this.employeService.findByIdAndUpdate({_id:data._id},updateReq);

        if(!updatedated){
            throw new NotFoundException('User Not Found')
        }
        return updatedated
    }

}


module.exports = {EmployeService:new EmployeService()}