const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");

const Roles = sequelize.define("Roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  // Add other fields as needed
},
{
    tableName: "roles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});


module.exports = Roles;
