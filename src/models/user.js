const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect');
const Roles = require('./role');

const Users = sequelize.define("Users",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name:{
          type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        verify_account_token:{
            type: DataTypes.STRING,
        },
        verify_account_expiry:{
            type: DataTypes.DATE,
        },
        reset_password_token:{
            type: DataTypes.STRING,
        },
        role_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 3,
            references: {
                model: Roles,
                key: 'id'
            }
        },
        is_active:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dob:{
            type: DataTypes.DATE,
        },
        created_by:{
            type: DataTypes.INTEGER,
        },
        updated_by:{
            type: DataTypes.INTEGER,
        },
        deleted_by:{
            type: DataTypes.INTEGER,
        },
        updated_at:{
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        },
    },
    {
       tableName: "users",
       timestamps: true,
       createdAt: "created_at",
       updatedAt: "updated_at",
       paranoid: true, //soft deleting
       deletedAt: "deleted_at", 
       hooks: {
           beforeCreate: (user, options) => {
               user.updated_at = null ; // explicitly setting null to avoid any value
           }
       }
    }
);

module.exports = Users;