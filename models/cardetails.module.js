const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarDetailSchema = new Schema({
    carnumber: { type: String, required: true },
    status: { type: Boolean, required: true },
    average: { type: Number, required: true },
    vehiclenumber: { type: String, required: true },
    seatingcapacity: { type: Number, required: true },
    fuel: { type: String, required: true },
    rpd: { type: Number, required: true },
    model: { type: Number, required: true },
    color: { type: String, required: true },
    imgpath: { type: String, required: true },
},
    {
        timestamps: true,
    }
);

const BookingsDetails = mongoose.model('CarDetails', CarDetailSchema);

module.exports = BookingsDetails;