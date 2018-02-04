const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const searchRouter = require('./routes/search.router');
// const favoritesRouter = require('./routes/favorites.router');


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json()); // needed for angular requests


// /** ---------- EXPRESS ROUTES ---------- **/
//app.use('/search', searchRouter);
//app.use('/favorites', favoritesRouter);

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
	console.log('Listening on port: ', app.get('port'));
});