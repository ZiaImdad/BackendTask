const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const connecttoDb = require("./config/dbHandler");

const bannerRoutes = require('./routers/bannerRoutes');
const selectedProductRoutes = require('./routers/selectedProductRoutes');
const newArrivalRoutes = require('./routers/newArrivalRoutes');

const app = express();
app.use(express.json());
app.use(morgan("dev"));

//connect to db

connecttoDb();

//all router fo userRouters
app.use('/api/banners', bannerRoutes);
app.use('/api/selected-products', selectedProductRoutes);
app.use('/api/new-arrivals', newArrivalRoutes);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`.bgWhite)
});
