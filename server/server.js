require("dotenv").config();
const path = require("path");
const express = require("express");

const connectDB = require('./config/connectDB');
const itemsRoute = require("./routes/itemsRoute");
const listsRoute = require("./routes/listsRoute");
const statsRoute = require("./routes/statsRoute");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const __currentDirectory = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__currentDirectory, '/client/build')));

  // app.get('*', function (req, res) {
  //   res.sendFile(path.resolve(__currentDirectory, 'client', 'build', 'index.html'));
  // });
}

app.use("/api/items", itemsRoute);
app.use("/api/lists", listsRoute);
app.use("/api/stats", statsRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});