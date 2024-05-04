const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.use(bodyParser.json());

function predictPrice(inputData, callback) {
    const pythonProcess = spawn('python', ['PricePrediction.py']);
    let dataToSend = '';

    pythonProcess.stdout.on('data', (data) => {
        dataToSend += data.toString();
    });

    pythonProcess.on('close', (code) => {
        if (code === 0) {
            callback(null, JSON.parse(dataToSend));
        } else {
            callback(new Error('Failed to predict price'), null);
        }
    });

    pythonProcess.stdin.write(JSON.stringify(inputData));
    pythonProcess.stdin.end();
}

app.post('/predictPrice', (req, res) => {
    const inputData = req.body;

    predictPrice(inputData, (error, result) => {
        if (error) {
            console.error('Error predicting price:', error);
            res.status(500).json({ error: 'Failed to predict price' });
        } else {
            res.json({ predictedPrice: result.predicted_price });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
