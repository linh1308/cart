/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <CartContainer />
                        <MessageContainer />
                        <Cart />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
