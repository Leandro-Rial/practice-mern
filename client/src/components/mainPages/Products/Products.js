import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState';
import ProductItems from '../Utils/ProductItems/ProductItems';
import Loading from '../Utils/Loading/Loading';
import './products.css';

function Products() {

    const state = useContext(GlobalState)
    const [products] = state.productAPI.products
    const [token] = state.token
    const [callback, setCallback] = state.productAPI.callback

    return (
        <>
            <div className="products">
                {
                    products.map(product => {
                         return <ProductItems key={product._id} token={token} product={product} callback={callback} setCallback={setCallback} />
                    })
                }
            </div>
            {products.length === 0 && <Loading />}
        </>
    )
}

export default Products
