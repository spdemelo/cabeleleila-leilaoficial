import { Schema, model, models } from 'mongoose';

const AgendamentoSchema = new Schema({
  nome: {
    type: String,
  },

  cpf: {
    type: String,
  },

  dia: {
    type: Date,
  },

  horario: {
    type: String,
  },
  
  procedimento: {
    type: String
},})

const Agendamento = models.Agendamento || model("Agendamento", AgendamentoSchema);

export default Agendamento;