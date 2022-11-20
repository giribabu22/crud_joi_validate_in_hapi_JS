const hapi = require('@hapi/hapi');
const validateClass = require('./serves/file_class');

const obj = new validateClass();
(async () => {
    const app = hapi.Server({ port: 4040, host: 'localhost' });
    app.route([
        {
            method: 'post',
            path: '/regist',
            handler: obj.registation_
        },
        {
            method: 'post',
            path: '/update_data',
            handler: obj.update_data
        },
    ])
    await app.start();
    console.log(app.info.uri);
})()
