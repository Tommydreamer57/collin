const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
app.use(bodyParser.json());
// app.use(cors());
// app.post('/api/console', (req, res) => {
//     console.log(req.body);
//     res.sendStatus(200);
// });
app.use(express.static(__dirname + '/../build'));
app.listen(3015, () => console.log('collin listening on port 3015!'));