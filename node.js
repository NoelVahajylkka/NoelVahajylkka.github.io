const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Replace with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://nerfnoksu:<wEGET7m1H0PZCURj>@cluster0.imcu25s.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const Comment = mongoose.model('Comment', {
    name: String,
    comment: String
});

app.get('/api/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(comments);
        }
    });
});

app.post('/api/comments', (req, res) => {
    const { name, comment } = req.body;
    const newComment = new Comment({ name, comment });

    newComment.save((err, savedComment) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(savedComment);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
