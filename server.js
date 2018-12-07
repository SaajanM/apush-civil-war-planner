let express = require('express');
let ndjson = require('ndjson');
let app = express();
app.use(express.static("./"));
app.listen(8080);

let questions = [];
fs.createReadStream('rainbow.ndjson')
    .pipe(ndjson.parse())
    .on('data', function (obj) {
        questions.push(obj);
    });
let index;
app.get('/public/getq', (request, response) => {
    index = Math.floor(Math.random() * questions.length);
    response.send(questions[index]);
});