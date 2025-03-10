'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      role.belongsToMany(models.user,{
        through:models.userroles,
        foreignKey:'role_id',
        otherKey:'user_id'
      })
    }
  }
  role.init({
    role_name: {
      type:DataTypes.ENUM('SuperAdmin', 'Admin', 'User'),
      allowNull:false,

    },
  }, {
    sequelize,
    modelName: 'role',
    tableName:'roles',
    timestamps:false,
  });
  return role;
};