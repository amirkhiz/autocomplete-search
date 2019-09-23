const app          = require('express')();
const config       = require('config');
const routes       = require('./routes/routes');
const errorHandler = require('./middleware/error-handler');
const corsHeader   = require('./middleware/cors-middleware');

app.use(corsHeader);

// Mount the router to the app
app.use('/', routes);

// Note: This middleware should be last one to work properly
app.use(errorHandler);

// Start server to listen to the port
app.listen(
    config.get('server.port'),
    () => {
        console.log(`[Server running on ${config.get('server.host')}:${config.get('server.port')}]`);
    },
);
