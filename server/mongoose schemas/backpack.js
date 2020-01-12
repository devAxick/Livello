const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BackpackSchema = new Schema(
    {
        type: String,
        name: String,
        brand: String,
        capacity: String,
        color: String,
        season: Array,
        description: String,
        images: Array
    }
);

const Backpack = mongoose.model('backpack', BackpackSchema);

module.exports = Backpack;
