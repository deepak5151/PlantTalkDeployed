const router = require('express').Router();
let CarDetails = require('../models/cardetails.module');

router.route('/').get((req, res) => {
    CarDetails.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:  ' + err));
});

router.route('/updatedetails/:_id').post((req, res) => {
    CarDetails.findById(req.params._id)
        .then(data => {
            data.status = false;
            data.save()
                .then(() => res.json('Details Updated'))
                .catch(err => res.status(400).json('Error:  ' + err));
        })
        .catch(err => res.status(400).json('Error:  ' + err));
});

module.exports = router;