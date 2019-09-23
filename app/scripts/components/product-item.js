/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React   from 'react';
import Product from '../services/product';

class ProductItem extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
     */
    render() {
        const product = this.props.product;

        return (
            <div className="product-item">
                <div className="product-image-wrapper">
                    <img className="product-image" src={product.picture} alt={product.name}/>
                </div>
                <div className="product-description-wrapper">
                    <h6 className="product-name">{product.name}</h6>
                    <p className="product-about">{product.about}</p>
                </div>
            </div>
        );
    }
}

module.exports = ProductItem;
