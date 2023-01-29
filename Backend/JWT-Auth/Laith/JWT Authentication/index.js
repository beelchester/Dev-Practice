const express = require('express');
const app = express();
const auth = require('./routes/auth');
const post = require('./routes/post');
app.use(express.json())

app.use('/auth', auth);
app.use('/post', post);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
