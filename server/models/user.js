'use strict';
const {
  Model
} = require('sequelize');
const bcrypt=require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.Order,{foreignKey:'user_id',onDelete:'CASCADE'});
      user.belongsToMany(models.role,{
        through:models.user_roles,
        foreignKey:"user_id",
        otherKey:"role_id"
      });
      user.hasMany(models.items,{
        foreignKey:'user_id',
        onDelete:'CASCADE'
      })
    }
  }
  user.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    email:{
      DataTypes:DataTypes.STRING,
      allowNull:false,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    address: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'user',
    tableName:"users",
    timestamps:true,
    hooks:{
      beforeCreate:async(user)=>{
        if(user.password){
          const salt=10;
          user.password=await bcrypt.hash(user.password,salt);
        }
      },
      beforeUpdate:async(user)=>{
        if(user.password){
          const salt=10;
          user.password=await bcrypt.hash(user.password,salt)
        }
      }
    }
  });
  return user;
};