import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  description: String,
  price: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;