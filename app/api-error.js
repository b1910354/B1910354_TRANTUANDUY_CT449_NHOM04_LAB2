class ApiError extends Error {
    constructor(statusCode, message) {
        // gọi hàm xây dựng cha của lớp Error
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;
