// for auth
const authService = require('../../service/auth/authService');

const registerUser = async (req, res, next) => {
    
   try {
    const userDetails = req.body;
    const newUser = await authService.saveUser(userDetails);
    res.status(201).json(newUser);
   } catch (error) {
     res.send(error.message);
   }
    
 }   


 module.exports = {registerUser}