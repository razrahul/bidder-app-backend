//auth service

const Users = require("../../models/user");
const { ERROR_MESSAGE } = require("../../utils/propertyResolver");

const saveUser = async (userDetails) => {
    try {
        const {email} = userDetails;

        const existingUser = await Users.findOne({email});
        if (existingUser) {
            throw new Error(ERROR_MESSAGE.EMAIL_ALREADY_EXISTS);
        }

        const newUser = await Users.create(userDetails);
        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
 }

 module.exports = {saveUser}