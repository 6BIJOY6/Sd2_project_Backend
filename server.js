const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");




//configuration env
dotenv.config();

//database config
connectDB();


//rest object 
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/category", categoryRoutes);

app.use("/api/v1/product", productRoutes);





//test api
app.get("/",(req,res) => {
  res.send("<h1>Welcome to IT_Center</h1>");
});

//Port
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, () => {
  console.log(
    `Server Running on ${PORT}`.bgCyan
      .white);
});