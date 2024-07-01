const { sequelize,table1 } =require('../model')

 class Service{
    async login2(Email,Password){
        await sequelize.sync();
        const result= table1.findOne(
            {where:{
                email:Email,
                password:Password
            }}
          
        )
        return result

    }
}
module.exports={Service}