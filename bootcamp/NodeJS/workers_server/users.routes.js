const { worker } = require('cluster');
const express = require('express');
const router = express.Router();
const fs = require('fs');

const workersJSON = require('./workers.json');

router.get('/', (req, res) => {
    return res.status(200).json({ workers: workersJSON.workers });
}).get('/:id', (req, res) => {
    return res.status(200).json({ worker: workersJSON.workers[req.params.id] });
}).post('/', (req, res) => {
    console.log(req.body);
    const { id, name } = req.body;
    
    let result = workersJSON.workers.find((worker) => {
        return worker.id == id;
    });

    if (!name || !id) {
        return res.status(200).json({error: 'Enter id and name!' });
    }
    else if (result) {
        return res.status(200).json({error: 'This id already exist!' });
    }
    else if (name.length < 6 || !name.includes(' ')) {
        return res.status(200).json({error: "Name must have ' ' or more than 5 charecters" });
    }
    else {
        const obj = {
            id,
            name,
            isActive: false
        }
        console.log(obj);
        // workersJSON.workers.push(req.body);
        fs.writeFileSync('./workers.json', JSON.stringify(workersJSON.workers.push(obj)));
        res.send(workersJSON.workers);
    }
})


module.exports = router;
