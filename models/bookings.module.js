const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingsSchema = new Schema({
    fullName: { type: String, required: true },
    carnumber: { type: String, required: true },
    carname: { type: String, required: true },
    Booked: { type: Date, required: true },
    ReturningDate: { type: Date, required: true },
    status: { type: Boolean, required: true },
    vehiclenumber: { type: String, required: true },
    imgpath: { type: String, required: true },
},
    {
        timestamps: true,
    }
);

const BookingsDetails = mongoose.model('BookingsDetails', BookingsSchema);

module.exports = BookingsDetails;