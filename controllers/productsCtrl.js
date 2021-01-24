const Products = require('../models/productsModels');

const productsCtrl = {
    getProducts: async (req, res) => {
        try {
            const products = await Products.find()

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })
        } catch (error) {
            return res.status(500).json({ msg: error.msg })
        }
    },
    createProduct: async (req, res) => {
        try {
            
            const { product_id, title, price, description } = req.body;

            const product = await Products.findOne({ product_id })

            if(product) {
                return res.status(400).json({ msg: 'This product already exists.' })
            }

            const newProduct = await new Products({
                product_id, title: title.toLowerCase(), price, description
            })

            await newProduct.save()

            res.json({ msg: 'Created' })

        } catch (error) {
            return res.status(500).json({ msg: error.msg })
        }
    },
    updateProduct: async (req, res) => {
        try {
            
            const { title, price, description } = req.body;

            await Products.findOneAndUpdate({_id: req.params.id}, {title: title.toLowerCase(), price, description} )

            res.json({ msg: 'Updated' })

        } catch (error) {
            return res.status(500).json({ msg: error.msg })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            
            await Products.findByIdAndDelete(req.params.id)

            res.json({ msg: 'Deleted' })

        } catch (error) {
            return res.status(500).json({ msg: error.msg })
        }
    }
}

module.exports = productsCtrl