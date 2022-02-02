import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as actions from '../actions/index';
import * as messages from '../constants/Message';

class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalPrice(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let result = <tr><td>{messages.MSG_CART_EMPTY  }</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem key={index} item={item} onDeleteProductCart={this.props.onDeleteProductCart} onChangeMsg={this.props.onChangeMsg} onUpdateProductCart={this.props.onUpdateProductCart}/>
            })
        }
        return result;
    }

    showTotalPrice = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                desc: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductCart: (product) => {
            dispatch(actions.deleteProductCart(product));
        },

        onChangeMsg: (msg) => {
            dispatch(actions.changeMessage(msg));
        },

        onUpdateProductCart: (product, quantity) => {
            dispatch(actions.updateProductCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);