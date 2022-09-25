const express = require("express");
// Enable cross-origin resource sharing (CORS) with various options.
const cors = require("cors");

// Morgan will log response codes after the response is sent
const morgan = require("morgan");
const contactsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
// parse JSON request to JS object
app.use(express.json());
app.use(morgan('dev'));

// register routers
app.use("/api/contacts", contactsRouter);

app.get('/', (req, res, next) => {
    res.json({message: "Welcome to contact book application."});
});

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;



