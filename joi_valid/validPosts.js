const Joi = require('@hapi/joi');

const validate = (schema) => (payload) => 
    schema.validate(payload,{abortEarly:false});
const postsSchema = Joi.object({
    post_title:Joi.string().min(1),
    reg_id:Joi.number().min(1)
})

exports.validPosts = validate(postsSchema)