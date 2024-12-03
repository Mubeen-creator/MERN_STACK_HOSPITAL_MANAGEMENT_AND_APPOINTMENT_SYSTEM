class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}


export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Extended`;
        err = new ErrorHandler(message, 400)
    }

    if (err === "JsonWebTokenError") {
        const message = "Json Web Token is invalid, Try Again!";
        err = new ErrorHandler(message, 400)
    }

    if (err === "TokenExpiredError") {
        const message = "Json Web Token has Expired, Try Again!";
        err = new ErrorHandler(message, 400)
    }

    if (err === "CastError") {
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message, 400)
    }

    const errorMessage = err.errors
        ? Object.values(err.errors)
            .map(error => error.message)
            .join(" ")
        : err.message

    return res.status(err.statusCode).json({
        success: false,
        message: errorMessage
    })
}


export default ErrorHandler


