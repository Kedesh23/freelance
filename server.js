const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req,res,send) => {
    res.send("Hi")
})
app.listen(port, () => {
    console.log(`Server open loclahost:${port}`);
});