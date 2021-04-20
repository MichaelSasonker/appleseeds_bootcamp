const express = require('express');
const router = express.Router();
const fs = require('fs');

const roomsJSON = require('./rooms.json');
const workersJSON = require('./workers.json');

router.get('/', (req, res) => res.status(200).json({ rooms: roomsJSON.rooms }));

router.get('/:id', (req, res) => res.status(200).json({ room: roomsJSON.rooms[req.params.id] }));

router.post('/', (req, res) => {
    const { id, maxAmount } = req.body;
    let result = roomsJSON.rooms.find(room => room.id == id);
    if (result) {
        return res.status(200).json({error: 'This id already exist!' });
    }
    else if (!maxAmount || !id) {
        return res.status(200).json({error: 'Enter id and maxAmount!' });
    }
    else {
        const roomObj = {
            id,
            maxAmount,
            currAmount: 0,
            isActive: false
        }

        let tempRoomsJSON = roomsJSON;
        tempRoomsJSON.rooms.push(roomObj);
        fs.writeFileSync('./rooms.json', JSON.stringify(tempRoomsJSON));
        res.send(tempRoomsJSON);
    }
});

router.post('/add-worker', (req, res) => {
    console.log(req.query.rn);
    console.log(req.query.id);

    let roomID = req.query.rn;
    let workerID = req.query.id;
    let tempRoomsJSON = roomsJSON;
    let tempWorkersJSON = workersJSON;
    let { roomResult } = roomsJSON.rooms.filter(room => room.rn == roomID);
    let { workerReslt } = workersJSON.workers.filter(worker => worker.id == workerID);
    if (roomResult.isActive && roomResult.currAmount < roomResult.maxAmount && workerReslt.isActive) {

    }
    res.send('good');
})

module.exports = router;