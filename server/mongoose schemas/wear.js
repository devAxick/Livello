const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WearSchema = new Schema(
    {
        type: String,
        name: String,
        brand: String,
        size: {
            EU: Number,
            US: Number,
            UK: Number,
            cm: Number
        },
        color: String,
        season: Array,
        description: String,
        images: Array
    }
);

const Wear = mongoose.model('wear', WearSchema);

module.exports = Wear;
