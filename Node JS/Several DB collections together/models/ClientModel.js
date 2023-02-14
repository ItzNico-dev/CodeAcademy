import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 200,
  },
  // ref - nurodom kurioj kolekcijoj ieskoti id
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }],
});

const clientModel = mongoose.model('clients', clientSchema);

export default clientModel;