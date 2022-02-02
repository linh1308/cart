import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import { addToCart, changeMessage } from '../actions/index';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products) {
        let result = null;
        if (products.length > 0) {
            result = products.map(product => {
                return <Product key={product.id} product={product} onAddToCart={this.props.onAddToCart} onChangeMsg={this.props.onChangeMsg}/>
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMsg: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(addToCart(product, 1));
        },

        onChangeMsg: (msg) => {
            dispatch(changeMessage(msg));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);