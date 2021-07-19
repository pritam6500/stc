import React, { useState } from 'react';
import ProductCard from './product_card';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
var productsJson = require('../static/products.json');
const ProductLists = () => {
    const totalProduct = JSON.stringify(productsJson);
    const [products, setProducts] = useState(productsJson);
    return (
        <div>
            <nav className="navbar listsHeader m-2 ">
                <div className="container-fluid d-flex">
                    <div className="d-flex">
                        <h2 >Devices</h2>
                        <div className="search-item">
                            <span className="icon-search"><i className="fa fa-search" aria-hidden="true"></i></span>
                            <input id="SearchInput" type="text" placeholder="Search Devices" onChange={DoSearch} />
                        </div>

                    </div>
                    <Link to="/products" className="routerLInk" ><i className="fa fa-cart-plus addProductIcon"></i></Link>
                </div>
            </nav>
            <div className="d-flex flex-wrap">
                {
                    products.map((product, key) => {
                        return (
                            <ProductCard key={key} productDetails={product} ></ProductCard>
                        )
                    })
                }
            </div>
        </div >
    )
    function DoSearch(event) {
        let totalProducts = JSON.parse(totalProduct);
        if (event.target.value) {
            let searchStr = event.target.value.toLowerCase();
            let filterProducts = totalProducts.filter(product => {
                if (product.name.toLowerCase().includes(searchStr) || product.brand.toLowerCase().includes(searchStr)) {
                    return product;
                }
                return false;
            })
            setProducts(filterProducts);
        } else {
            setProducts(totalProducts);
        }

    }
}

export default ProductLists;