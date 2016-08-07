import express from 'express';
import config from './init/config';
import router from './controllers';

const app = express();

app
    // do not forget to npm install ejs
    .set('view engine', 'ejs')
    .set('port', config.server.port)
    .use(express.static('public'))
    // for each route we use react-router
    .use('*', router)
    .listen(app.get('port'), config.server.host, err => {
        if (err) {
            throw err;
        }
        console.log(`Listening to ${app.get('port')}`)
    });
