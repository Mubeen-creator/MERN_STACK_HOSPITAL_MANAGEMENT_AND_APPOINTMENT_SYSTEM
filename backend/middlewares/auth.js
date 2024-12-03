import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsycnErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken"



export const isAdminAuthenticated = catchAsyncErrors(async(req, res, next) => {
    const token = req.cookies.adminToken;
    if(!token){
        return next(new ErrorHandler("Admin Not Authenticated!", 400))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = await User.findById(decoded.id);
    if(req.user.role !== "Admin"){
        return next(new ErrorHandler(`${req.user.role} not authorize for these resources!`, 403))
    }
    next();
});






export const isPatientAuthenticated = catchAsyncErrors(async(req, res, next) => {
    const token = req.cookies.patientToken;
    if(!token){
        return next(new ErrorHandler("Patient Not Authenticated!", 400))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = await User.findById(decoded.id);
    if(req.user.role !== "Patient"){
        return next(new ErrorHandler(`${req.user.role} not authorize for these resources!`, 403))
    }
    next();
});

