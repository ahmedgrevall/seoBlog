const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const blogRoutes = require("./Routes/blog");
const authRoutes = require("./Routes/auth");

// app
const app = express();

//Db
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Db connected"));

//MiddleWares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//Cors
if (process.env.NODE_ENV === "development")
  app.use(
    cors({
      origin: `${process.env.CLIENT_URL}`,
    })
  );

app.use("/api", blogRoutes);
app.use("/api", authRoutes);

//Port
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is Running On ${port}`);
});
