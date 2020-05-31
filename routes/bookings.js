const router = require('express').Router();
let BookingsDetails = require('../models/bookings.module');

router.route('/').get((req, res) => {
    BookingsDetails.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:  ' + err));
});

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const carnumber = req.body.carnumber;
    const carname = req.body.carname;
    const Booked = req.body.Booked;
    const ReturningDate = req.body.ReturningDate;
    const status = req.body.status;
    const vehiclenumber = req.body.vehiclenumber;
    const imgpath = req.body.imgpath;

    const newBookingsDetails = new BookingsDetails({ fullName, carnumber, carname, Booked, ReturningDate, status, vehiclenumber, imgpath });

    newBookingsDetails.save()
        .then(() => res.json('Booking Done'))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;