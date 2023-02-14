import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    required: true,
  },
  // ref - nurodo kurioje kolekcijoje ieskoti id
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'clients' },
});

const orderModel = mongoose.model('orders', orderSchema);

export default orderModel;