const Router = require('koa-router');
const BASE_URL = `/api/v1/books`;
const books = require('../static/books.json');
const router = new Router();

router.get(BASE_URL, (ctx) => {
    try {
        ctx.body = books;
        ctx.status = 200;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
})

module.exports = router;