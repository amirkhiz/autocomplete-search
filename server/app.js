const app          = require('express')();
const config       = require('config');
const routes       = require('./routes/routes');
const errorHandler = require('./middleware/error-handler');

// Mount the router to the app
app.use('/', routes);
app.use(errorHandler);

// Start server to listen to the port
app.listen(
    config.get('server.port'),
    () => {
        console.log(`[Server running on ${config.get('server.host')}:${config.get('server.port')}]`);
    },
);

// Use Transformer
// Use monolog error logger
// Use JWT Auth Middleware
