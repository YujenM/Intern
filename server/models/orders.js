'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    
    static associate(models) {
      orders.belongsTo(models.users,{
        foreignKey:"user_id",
        onDelete:'CASCADE',
        onUpdate:"CASCADE"
      })
    }
  }
  orders.init({
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'users',
        key:'id',
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    },
    order_date: {
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'orders',
    tableName:'orders',
    timestamps:true
  });

  return orders;
};