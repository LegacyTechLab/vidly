const Joi = require('joi');

module.exports.validateGenre = function(req, res, next){
    const schema = Joi.object({
        name : Joi.string().required().min(3).max(30)
        //Check all joi errors
    });

    const {error} = schema.validate(req.body);
    if(error){
        res.status(400).json({
            message : "An error occured",
            error : error.details[0].message
        });
    }else{
        next();
    }
};