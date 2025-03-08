// for auth
const authService = require('../../service/auth/authService');
const { SUCCESS_MESSAGE, ERROR_MESSAGE } = require('../../utils/propertyResolver');
const { sendSuccessResponse, sendErrorResponse } = require('../../utils/response');

const bcrypt = require('bcrypt');

const registerUser = async (req, res, next) => {
    
   try {
    const { password} = req.body;
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await authService.saveUser({...req.body, password: hashpassword});
    // res.status(201).json(newUser);
    sendSuccessResponse(res, SUCCESS_MESSAGE.USER_CREATED_SUCCESSFULLY, newUser, 201);
   } catch (error) {
    //  res.send(error.message);
    sendErrorResponse(res, error.message || ERROR_MESSAGE.SOMETHING_WENT_WRONG, "", 40);
   }
    
 }   


 module.exports = {registerUser}