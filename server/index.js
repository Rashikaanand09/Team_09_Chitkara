const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/reviews', require('./routes/reviews'));

connectDB();
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
