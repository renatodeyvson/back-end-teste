const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const phoneSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    photo: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    color: { type: String, enum: ['BLACK', 'WHITE', 'GOLD', 'PINK'], required: true },
    createdAt: { type: Date, default: Date.now }
});

phoneSchema.plugin(mongoosePaginate);

mongoose.model('Phone', phoneSchema);