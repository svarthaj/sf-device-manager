const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

var Device = require('../model/devices')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all devices
router.get('/devices', (req, res) => {
  Device.find({}, function(err, devices) {
    if (err) throw err;

    // object of all the device
    //console.log(devices);
    res.status(200).json(devices);
  });
});

// Add device
router.post('/devices/add', (req, res) => {
  var newDevice = Device(req.body);
  newDevice.save(function(err) {
    if (err) throw err;
    console.log('Device created!');
  });
});

// Delete device


// Update device
router.put('/devices/update', (req, res) => {
  Device.findById(`${req.body._id}`, function(err, device) {
    if (err) throw err;

    // Update the device
    device.name = req.body.name;
    device.model = req.body.model;
    device.description = req.body.description;

    //console.log(device.name, device.model, device.description);

    // Save the updated device
    device.save(function(err) {
      if (err) throw err;

      console.log('Device successfully updated!');
    });
  });
});

router.put('/devices/delete', (req, res) => {
  Device.findById(`${req.body._id}`, function(err, device) {
    // Remove the selected device
    device.remove(function(err) {
      if (err) throw err;
      console.log('Device successfully removed!');
    });
  });
});

module.exports = router;
