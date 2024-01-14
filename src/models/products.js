
import mongoose from 'mongoose';


const ProductsSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,

    },

    price: {
        type: Number,
        required: true,
        unique: true,

    },

  
}, {
    timestamps: true,
})



const Products = mongoose.models.Products || mongoose.model('Products', ProductsSchema);

export default Products;