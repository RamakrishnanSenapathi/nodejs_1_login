var Sequelize=require("sequelize")
const {DataTypes}=require("sequelize")
const {db_name,db_user,db_password}=require("./config")

const sequelize=new Sequelize(
    db_name,db_user,db_password,
    {
        host:'127.0.0.1',
        port:'3306',
        dialect:'mysql'
      }
);

async function conTest(){
    try{
let con=await sequelize.authenticate();
console.log('Connection has been established successfully.');
}
catch(e){
console.log('connection error 11',e)
}
}

conTest();
    const table1=sequelize.define("ram_registers_fs",{
        id:{
            type:  DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type : DataTypes.STRING,
            allowNull:false
        },
        email:{
            type : DataTypes.STRING,
            unique : true,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        }

});

 module.exports={sequelize,table1}