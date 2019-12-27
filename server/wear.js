const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WearSchema = new Schema({
   name: String,
   size: {
       eu: Number,
       cm: Number,
       us: String
   },
    season: String
});

const Wear = mongoose.model('wear', WearSchema);

module.exports = Wear;
