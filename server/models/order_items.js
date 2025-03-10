'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_items extends Model {
    static associate(models) {
      order_items.belongsTo(models.orders,{
        foreignKey:'order_id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      });
      order_items.belongsTo(models.items,{
        foreignKey:'item_id',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  order_items.init({
    order_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'orders',
        foreignKey:'id'
      },
      onDelete:"CASCADE",
      onUpdate:'CASCADE'
    },
    item_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'items',
        key:'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'order_items',
    tableName:'order_items',
    timestamps:true,
  });
  return order_items;
};