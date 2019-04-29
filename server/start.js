const path = require('path');
const bodyParser = require('koa-body');
const Koa = require('koa');
const cors = require('@koa/cors');
const koaStatic = require('koa-static');
const getPort = require('get-port');
const router = require('./router');

async function runServer() {
    const port = await getPort({ port: 3000 });

    const app = new Koa();
    app
    .use(koaStatic(path.join(__dirname, '..', 'static')))
    .use(bodyParser())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

    app.listen(port);

    console.log(`server started at http://localhost:${port}/`);
}

runServer().catch(console.error);