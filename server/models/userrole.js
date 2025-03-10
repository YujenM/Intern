'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRole extends Model {
    static associate(models) {
      userRole.belongsTo(models.user,{
        foreignKey:'user_id',
        onDelete:'CASCADE'
      });
      userRole.belongsTo(models.role,{
        foreignKey:"role_id",
        onDelete:"CASCADE"
      });
    }
  }
  userRole.init({
    user_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      references:{
        model:'users',
        key:'id',
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    },
    role_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      references:{
        model:'roles',
        key:'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'userRole',
    tableName:'userRoles',
    timestamps:false
  });
  return userRole;
};