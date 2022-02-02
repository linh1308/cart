/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as messages from '../constants/Message';

class CartItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)} className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)} className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.product.price * item.quantity}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" onClick={() => this.onDelete(item.product)} data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onDelete = (product) => {
        this.props.onDeleteProductCart(product);
        this.props.onChangeMsg(messages.MSG_DELETE_TO_CART);
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateProductCart(product, quantity);
            this.props.onChangeMsg(messages.MSG_UPDATE_TO_CART);
        }
    }
}

export default CartItem;