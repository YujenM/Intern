'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
   
    static associate(models) {
      items.belongsTo(models.user,{
        foreignKey:"user_id",
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      });
      items.belongsToMany(models.order,{
        through:models.order_items,
        foreignKey:'item_id',
        otherKey:'order_id'
      })
    }
  }
  items.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type:DataTypes.TEXT,
      allowNull:false
    },
    price:{
      type:DataTypes.DECIMAL(10,2),
      allowNull:false,
    },
    stock: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'users',
        key:'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'items',
    tableName:'items',
    timestamps:true,
  });
  return items;
};