import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Recipe extends Component {
  render() {
    const total = (this.props.total).toFixed(2);
    return (
      <div className="subtotal">
        <div className="row">
          <div className="col text-right">
            <b>Total: ${total}</b>
          </div>
        </div>
        <div className="row">
          <div className="col text-right">
            <Link to="/checkout" className="btn bg-dark">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

export default connect(
  mapStateToProps
)(Recipe);
