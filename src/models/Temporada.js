const mongoose = require('../config/database');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TemporadaSchema = new Schema({
    idTemporada: ObjectId,
    periodoInicial: {
        type: Number,
        require: true
    },
    periodoFinal: {
        type: Number,
        default: null
    },
    ano: {
        type: Number,
        require: true
    },
    estudio: {
        type: String,
        require: true
    },
    numero: {
        type: Number,
        require: true
    },
    episodios: [
        {type: Schema.Types.ObjectId, ref: 'episodio'}
    ]
});

mongoose.model('temporada', TemporadaSchema);

module.exports = mongoose.model('temporada');