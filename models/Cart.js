/** @format */

const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    uerId: { type: String, required: true },
    products: [
      {
        projectId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema);
