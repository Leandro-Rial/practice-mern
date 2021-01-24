import React, {useState} from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import BtnRender from './BtnRender';
import './productItems.css'

function ProductItems({ product, callback, setCallback, token }) {
    
    const [loading, setLoading] = useState(false);
    
    const deleteProduct = async () => {
        try {
            
            const deleteProduct = await axios.delete(`/api/products/${product._id}`, {
                headers: {Authorization: token}
            })

            await deleteProduct

            setLoading(false)
            setCallback(!callback)

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    if(loading) return <div className="product_card"><Loading /></div>

    return (
        <div className="product_card">
            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <hr/>
                <span>${product.price}</span>
                <hr/>
                <p>{product.description}</p>
            </div>

            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItems
