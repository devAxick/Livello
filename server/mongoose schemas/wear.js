const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WearSchema = new Schema(
    {
        type: String,
        name: String,
        article: String,
        brand: String,
        size: String,
        color: String,
        season: Array,
        description: String,
        images: Array,
        destination: String,
        gender: Array,
        price: String,
        discount: String
    }
);

const Wear = mongoose.model('wear', WearSchema);

module.exports = Wear;
