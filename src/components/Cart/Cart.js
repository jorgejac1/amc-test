/**
 * Cart component
 * Will trigger removeItem, addQuantity, subtractQuantity
 * On ation of buttons in the page
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../actions/cartActions";
import SubTotal from '../Subtotal/Subtotal';
import './cart.css';

class Cart extends Component {
  //to remove the product completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedProducts = this.props.products.length ? (
      this.props.products.map(product => {
        return (
          <li className="collection-item" key={product.id}>
            <div className="remove">
              <span onClick={()=>{this.handleRemove(product.id)}}>
                <a href="#">
                  <i className="material-icons dp48">clear</i>
                </a>
              </span>
            </div>
            <div className="item-img">
              <img src={product.img} alt={product.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{product.title}</span>
              <p>{product.desc}</p>
              <div className="row">
                <div className="col nopadding">
                  <p>
                    <b>Price: ${product.price}</b>
                  </p>
                </div>
                <div className="col nopadding">
                  <div className="add-remove text-right">
                    <Link to="/cart">
                      <i
                        className="material-icons dp48 tiny mr-3"
                        onClick={() => {
                          this.handleAddQuantity(product.id);
                        }}
                      >
                        add
                      </i>
                    </Link>
                    <span className="mr-3">
                      <b>{product.quantity}</b>
                    </span>
                    <Link to="/cart">
                      <i
                        className="material-icons dp48 tiny mr-3"
                        onClick={() => {
                          this.handleSubtractQuantity(product.id);
                        }}
                      >
                        remove
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })
    ) : (
      <p>Your cart is empty</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedProducts}</ul>
        </div>
        <SubTotal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.addedProducts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
