const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(52),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(21),
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    country: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING(144),
        allowNull: false
    },
    pro_pic: {
        type: DataTypes.STRING(111),
        // allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
