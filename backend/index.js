const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const { routes } = require('./routes/routes.js');
require('dotenv').config();

// app
const app = express();

// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(express.json());

// db
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.log("DB Connection Error", err));

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

// routes
// Add all the routes to our Express server
// exported from routes/index.js
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => console.log(`Concierge backend is running on port: ${port}`));
