const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");

exports.create = async (req, res, next) => {
    if(!req.body?.name) {
        return next(new ApiError(400, "Name can not be empty"));
    }

    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};

// const create = (req, res, next) => {
//     res.send({message: "create handler"});
// };
// exports.create = create;

exports.findAll = (req, res, next) => {
    res.send({ message: "findAll handler" });
};

exports.findOne = (req, res, next) => {
    res.send({ message: "findOne handler" });
};

exports.update = (req, res, next) => {
    res.send({ message: "update handler" });
};

exports.delete = (req, res, next) => {
    res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res, next) => {
    res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res, next) => {
    res.send({ message: "findAllFavorite handler" });
};

