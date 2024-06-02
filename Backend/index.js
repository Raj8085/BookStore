const express = require("express")
const mongoose = require('mongoose');
const bookRoute = require("./route/bookRoute.js")
const userRoute = require("./route/user.route.js")
const cors = require("cors")
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
 
const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

try {
    mongoose.connect(URL);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user",userRoute)
app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
});
