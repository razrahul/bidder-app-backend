//auth service

const Users = require("../../models/user");
const { ERROR_MESSAGE } = require("../../utils/propertyResolver");

const saveUser = async (userDetails) => {
    try {
        const {email, role_id} = userDetails;
        if(role_id == 1) {
            throw new Error(ERROR_MESSAGE.UNAUTHORIED_USER);
        }

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