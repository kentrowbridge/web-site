const express = require('express');
const app = express();

app.use('/', express.static('public'));

app.get('/api', (req, res, next) => {
    res.json({test: 2});
});

var port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);