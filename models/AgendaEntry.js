const mongoose = require('mongoose');

const agendaEntrySchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    contato: { type: Number, required: true, trim: true },
   
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('AgendaEntry', agendaEntrySchema);