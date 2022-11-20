const Joi = require('@hapi/joi');

const validator = (schema) => (payload) => 
    schema.validate(payload,{abortEarly:false});

const registSchema = Joi.object({
    email : Joi.string().email().required().lowercase(),
    password: Joi.string().max(6).required(),
    name:Joi.string().min(1).required(),
    phone_no:Joi.number().min(10).required(),
    age: Joi.number().required()
})

exports.validateRegist = validator(registSchema)

