import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
  render () {
    console.log(this.props);
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link classNameName="navbar-brand" to="/">
          <img src="https://dimages.amcnetworks.com/78x/cdn.amcnetworks.com/amc/theme/web/amc_logo_bk_bg.png" alt="AMC" />
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/product" className="nav-item nav-link" to="/product">Shop</Link>
            </div>
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="/cart">
                <i className="material-icons dp48">
                  shopping_cart
                </i>
                <span className="cart_quantity">{this.props.total}</span>
              </Link>
            </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    total: state.totalItems
  };
};

export default connect(mapStateToProps)(Nav)
