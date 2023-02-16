import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;