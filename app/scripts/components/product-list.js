/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React       from 'react';
import ProductItem from './product-item';

class ProductList extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();

        this.itemLimit = 4;
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
     */
    render() {
        let products     = this.props.products.slice(0, this.itemLimit).map((product, index) => {
            return (<ProductItem product={product} key={index}/>);
        });
        let limit        = (products.length < this.itemLimit) ? products.length : this.itemLimit;
        let displayCount = <p className="search-result-count">Display <b>{limit}</b> of <b>{this.props.products.length}</b> Results.</p>;

        return (
            <div className="products-list">
                {(products.length > 0 ? displayCount : '')}
                {products}
            </div>
        );
    }
}

module.exports = ProductList;
