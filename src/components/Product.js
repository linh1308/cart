/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as messages from '../constants/Message';

class Product extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={ product.image } className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{ product.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(product.rating)}
                        </ul>
                        <p className="card-text">{ product.desc }</p>
                        <div className="card-footer">
                            <span className="left">{ product.price }</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" onClick={() => this.onAddToCart(product)} data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMsg(messages.MSG_ADD_TO_CART);
    }
    
    showRating = (rates) => {
        let result = [];
        for (let i = 0; i < rates; i++) {
            result.push(<i key={i} className='fa fa-star'></i>);
        };

        for (let i = 5; i > rates; i--) {
            result.push(<i key={i} className='fa fa-star-o'></i>);
        };
        return result;
    }
}

export default Product;