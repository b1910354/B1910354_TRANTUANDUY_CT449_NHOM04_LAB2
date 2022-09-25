const { MongoAPIError } = require("mongodb");
const ContactService = require('../services/contact.service');

// create a new contact
exports.create = async (req, res, next) => {
    const contact = new ContactService({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        favorite: req.body.favorite
    });

    const nameContact = await ContactService.findOne({name: req.body.name});

    if(nameContact) {
        return res.send(req.body);
    }

    try {
        await contact.save();
        res.send(req.body);
    }catch(err) {
        return next(
            new MongoAPIError(500, "An error occurred while creating the contact")
        );
    }
};

// const create = (req, res, next) => {
//     res.send({message: "create handler"});
// };
// exports.create = create;

// return all contact
exports.findAll = async(req, res, next) => {
   let searchOptions = {};
   if (req.query.name != null && req.query.name !==''){
     searchOptions.name = new RegExp(req.query.name, 'i') 
     // 'i' ở đây có nghĩa là tìm kiếm tên mà không phần biệt chữ hoa hay thường
   }
   try{
     const contacts = await ContactService.find(searchOptions);
    //  res.render('authors/index',{
    //    authors: authors,
    //    searchOptions : req.query
    //  })
    return res.send(contacts);
   }catch(err) {
        return next(
            new MongoAPIError(500, "An error occured while retrieving contacts")
        );
    }
    // res.send({ message: "findAll handler" });
};

// return contact information by id
exports.findOne = async(req, res, next) => {
   let searchOptions = {};
   if (req.query.name != null && req.query.name !==''){
     searchOptions.name = new RegExp(req.query.name, 'i') 
     // 'i' ở đây có nghĩa là tìm kiếm tên mà không phần biệt chữ hoa hay thường
   }
   try{
     const contacts = await ContactService.find(searchOptions);
    //  res.render('authors/index',{
    //    authors: authors,
    //    searchOptions : req.query
    //  })
    return res.send(contacts);
   }catch(err) {
        return next(
            new MongoAPIError(500, "An error occured while retrieving contacts")
        );
    }
    // res.send({ message: "findOne handler" });
};

// update contact information  by id
exports.update = (req, res, next) => {
    res.send({ message: "update handler" });
};

// delete contact
exports.delete = (req, res, next) => {
    res.send({ message: "delete handler" });
};

// delete all contact
exports.deleteAll = (req, res, next) => {
    res.send({ message: "deleteAll handler" });
};

// list all favorite contact
exports.findAllFavorite = (req, res, next) => {
    res.send({ message: "findAllFavorite handler" });
};

