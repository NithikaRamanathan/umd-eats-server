const fs = require('fs');
const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

const filePath = 'lunch.txt';

app.use(cors());

app.get('/lunch.txt', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }
        res.send(data);
    });
});

const filePath = 'lunch.txt';

app.use(cors());

app.get('/lunch.txt', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }
        res.send(data);
    });
});

const filePath3 = 'dinner.txt';

app.use(cors());

app.get('/dinner.txt', (req, res) => {
    fs.readFile(filePath3, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});