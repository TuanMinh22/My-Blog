const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const morgan = require('morgan');
const helmet = require('helmet');
const route = require('./routes');
const path = require('path');

dotenv.config();
app.use("/images", express.static(path.join(__dirname, "/images")));

try {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log("Connect Succesfully");
} catch (e) {
    console.log('connect failed');
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});
//middleware
app.use(express.urlencoded());
app.use(express.json());
//helmet
app.use(helmet());
//morgan
app.use(morgan('combined'));
//route init
route(app);

app.listen("5000", () => {
    console.log("Backend is running.");
})