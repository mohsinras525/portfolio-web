const User = require('../model/userModel')



exports.registerUser = async(req, res, next) => {
    const {name, email, password } = req.body;
    const user = await User.create({
        name,email,password})
    
        if(!user){
            res.status(400).json({
                success:false,
                message:"not register succesfully"
            })
        }
    res.status(201).json({
        success:true,
        message:"user created successfully "
    })
}

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new Error("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new Error("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new Error("Invalid email or password", 401));
    }
  
    res.status(200).json({
        success:true,
        message:"login successfully",
        user
    })
    
}