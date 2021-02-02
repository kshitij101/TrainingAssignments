const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
    id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      primaryKey: true
    },
    moviename: {
      type: DataTypes.STRING(52),
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    review: {
        type: DataTypes.STRING(1500),
        allowNull: false
      },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    movie_img: {
        type: DataTypes.STRING(32),
        // allowNull: false
      }
    
  }, {
    sequelize,
    tableName: 'reviews',
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
      {
        name: "FK_AUTHOR",
        using: "BTREE",
        fields: [
          { name: "author" },
        ]
      },
    ]
  });
};
