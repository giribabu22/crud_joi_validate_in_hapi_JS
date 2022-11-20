const { validateRegist } = require('../joi_valid/validRegScm');
const { validateUpdate } = require('../joi_valid/validUpdate');
const knexConnection = require('../config/knexConection');

class validateClass {
    async registation_(req) {
        const { error, value } = await validateRegist(req.payload)
        if (error) {
            return error.details
        }
        const li = await knexConnection('registation_data').where({'email':value.email})
        if(li.length){
            return {status:'Error',message:'this email is already exist!!'}
        }
        await knexConnection('registation_data').insert(value)
        return { status: 'ok!', message: 'crated successfully',value:value }
    }
    async update_data(req){
        console.log(req.payload.updateData);
        const { error, value } = await validateUpdate(req.payload.updateData)
        if (error){
            return error.details
        }
        let r = await knexConnection('registation_data').where({ 'email': req.payload.email }).update(value);
        if (r) {
            return { status: 'ok!', message: 'update successfully', value: req.payload.updateData }
        }
        return { status: 'Error', message: 'this email is not exist!!' }
    }

}


module.exports = validateClass