/**
 * NODEJS API
 * DATABASE MONGODB
 * VERSION 4.4.3
 * POWERED BY SOFTLAB IT
 * DEVELOP BY MOWMITA AHMED CHOWDHURY
 */

// const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

// Cross Unblocked File..
const cors = require('cors');

/**
 *  Router File Import
 */
const apiRoutes = require("./routes/api");
const userRoutes = require("./routes/user");
const productBrandRoutes = require('./routes/product-brand');
const productCategoryRoutes = require('./routes/product-category');
const productRoutes = require('./routes/product');

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

/**
 * MAIN BASE ROUTER WITH IMPORTED ROUTES
 */
app.use("/api", apiRoutes);
app.use("/api/user", userRoutes);
app.use('/api/brand', productBrandRoutes);
app.use('/api/product-category', productCategoryRoutes);
app.use('/api/product', productRoutes);

app.get("/", (req, res) => {
  res.send('<div style="width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center"><h1 style="color: blueviolet; text-transform: uppercase">Startech.com.bd RUNNING...</h1><p style="color: lightcoral">Powered by MOWMITA AHMED</p></div>');
});



/**
 * NODEJS SERVER
 * PORT CONTROL
 * MongoDB Connection
 * IF PASSWORD contains @ then encode with https://meyerweb.com/eric/tools/dencoder/
 * Database Name roc-ecommerce
 * User Access authSource roc-ecommerce
 */
 mongoose.connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=${process.env.AUTH_SOURCE}`,
    // `mongodb://localhost:27017/${process.env.DB_NAME}`,
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
        // useCreateIndex: false
    }
)
    .then(() => {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server is running at port:${port}`));
        console.log('Connected to mongoDB');

    })
    .catch(err => {
        console.error('Oops! Could not connect to mongoDB Cluster0', err);
    })
