// for auth
const authService = require('../../service/auth/authService');
const { SUCCESS_MESSAGE, ERROR_MESSAGE } = require('../../utils/propertyResolver');
const { sendSuccessResponse, sendErrorResponse } = require('../../utils/response');

const registerUser = async (req, res, next) => {
    
   try {
    const userDetails = req.body;
    const newUser = await authService.saveUser(userDetails);
    // res.status(201).json(newUser);
    sendSuccessResponse(res, SUCCESS_MESSAGE.USER_CREATED_SUCCESSFULLY, newUser, 201);
   } catch (error) {
    //  res.send(error.message);
    sendErrorResponse(res, error.message || ERROR_MESSAGE.SOMETHING_WENT_WRONG, "", 40);
   }
    
 }   


 module.exports = {registerUser}