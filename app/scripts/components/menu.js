/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React   from 'react';
import Product from '../services/product';

import ProductList from '../components/product-list';

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();

        this.state = {
            showingSearch: false,
            products     : [],
            searchMessage: '',
        };

        this.productService = new Product();
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();

        this.setState(
            {showingSearch: !this.state.showingSearch},
            // Use callback to set focus on search input box.
            () => {
                if (this.state.showingSearch) {
                    this.searchInput.focus();
                }
            },
        );
    }

    /**
     * Clear search content and result
     * @param event
     */
    clearSearch(event) {
        event.preventDefault();

        this.setState(
            {
                showingSearch: !this.state.showingSearch,
                products     : [],
                searchMessage: '',
            },
        );

        this.searchInput.value = '';
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param event [Object] - the event from a text change handler
     */
    onSearch(event) {
        let term = event.target.value.trim();

        this.setState({products: [], searchMessage: ''});

        // Return false if term is empty po is less than 3 characters
        if (!term || term.length < 3) {
            return null;
        }

        this.productService.search(term, (error, response) => {
            if (error) {
                console.warn(error.message);
                this.setState({searchMessage: 'There is no result. Please try with another terms.'});

                return;
            }

            if (response.data) {
                this.setState({products: response.data});
            }
        });
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
     */
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? 'showing ' : '') + 'search-container'}>
                    <input type="text" onChange={(e) => this.onSearch(e)} ref={(input) => {
                        this.searchInput = input;
                    }} placeholder="Enter Search Term"/>
                    <a href="javascript:;" className="close-search-btn" onClick={(e) => this.clearSearch(e)}>
                        <i className="material-icons close">close</i>
                    </a>
                    <ProductList products={this.state.products}/>
                    <p className="search-message">{this.state.searchMessage}</p>
                </div>
            </header>
        );
    }
}

// Export out the React Component
module.exports = Menu;
