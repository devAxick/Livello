const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoesSchema = new Schema(
    {
        type: String,
        article: String,
        name: String,
        brand: String,
        size: {
            EU: Number,
            US: Number,
            UK: Number,
            cm: Number
        },
        color: String,
        destination: String,
        materials: Array,
        technologies: Array,
        season: Array,
        description: String,
        images: Array,
        price: String,
        discount: String,
    }
);

const Shoes = mongoose.model('shoes', ShoesSchema);

module.exports = Shoes;
