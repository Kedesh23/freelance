const express = require('express');
const app = express();

const port = 5000;

app.use(express.static('public'));

app.get('/', (req,res,send) => {
    res.sendFile(__dirname + ('public/index.html'));
})
app.listen(port, () => {
    console.log(`Server open loclahost:${port}`);
});