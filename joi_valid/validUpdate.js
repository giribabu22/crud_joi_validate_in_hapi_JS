let Joi = require('@hapi/joi')

let validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

let updateSchema = Joi.object({
    email: Joi.string().email().lowercase(),
    password: Joi.string().max(6),
    name: Joi.string().min(1),
    phone_no: Joi.number().min(10),
    age: Joi.number()
})


exports.validateUpdate = validator(updateSchema)