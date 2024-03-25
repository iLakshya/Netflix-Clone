const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connected")
})
.catch((err) => {
    console.log(err.message);
});

app.use("/api/user", userRoutes);

app.listen(500, () => {
    console.log("Server Started")
});