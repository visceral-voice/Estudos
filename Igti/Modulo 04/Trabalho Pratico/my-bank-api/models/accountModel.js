import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
  agencia: {
    type: Number,
    require: true,
    min: [1, "Número da agência inválido!"],
    max: 9999
  },
  conta: {
    type: Number,
    require: true,
    min: [1, "Número da agência inválido!"],
    max: 99999999
  },
  name: {
    type: String,
    require: true
  },
  balance: {
    type: Number,
    require: true
  }
});

const accountModel = mongoose.model("account", accountSchema);

export { accountModel };