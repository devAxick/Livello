const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WearSchema = new Schema(
    {
        name: String,
        brand: String,
        size: {
            EU: Number,
            US: Number,
            UK: Number,
            cm: Number
        },
        color: Array,
        season: String,
        type: String,
        description: String,
        images: Array
    }
);

module.exports = mongoose.model('wearItem', WearSchema);
