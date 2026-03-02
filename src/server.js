/*server.js is the entry point of the application.
 It sets up the Express server, configures middleware, and defines routes.
*/
const express = require('express');
const path = require('path');

// Create an instance of the Express application
const app = express();
const PORT = process.env.PORT || 3000;

//static files
app.use(express.static(path.join(__dirname, 'public')));

//view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.get('/', (req, res) => {
    res.send('express server is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});