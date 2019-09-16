/**
 * Checkout component
 * Will receive
 * Coupon - From API to match with inputType
 * AddedItems - Number of items added per product
 * Total - Amount total
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../Input";
import './checkout.css'

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      coupon: '',
      couponAdded: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleCouponChange = event => {
    this.setState({ coupon: event.target.value });
    event.preventDefault();
  };

  handleUserInput = (e) => {
    this.setState({ couponAdded: true });
    event.preventDefault();
  }

  render() {
    const total = (this.props.total).toFixed(2);
    let showTotal = this.state.couponAdded ? (
      this.props.coupons.map(coupon => {
        const totalDiscout = (this.props.total - (this.props.total * coupon.discount)).toFixed(2);
        return (
          <h5 className="font-weight-bold">${totalDiscout}</h5>
        );
      })
    ) : (
      <h5 className="font-weight-bold">${total}</h5>
    );
    return (
      <form className="row py-5 p-4 bg-white rounded shadow-sm" method="POST" action="/sendOrder">
        <div className="col">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
            Your Information
          </div>
          <div className="form-row">
            <div className="col">
              <Input
                inputType={"text"}
                title={"First Name"}
                name={"firstName"}
                id={"firstName"}
                placeholder={"First Name"}
              />
            </div>
            <div className="col">
              <Input
                inputType={"text"}
                title={"Last Name"}
                name={"lastName"}
                id={"lastName"}
                placeholder={"Last Name"}
              />
            </div>
            <div className="col">
              <Input
                inputType={"email"}
                title={"Email"}
                name={"email"}
                id={"email"}
                placeholder={"Email"}
              />
            </div>
          </div>
          <div className="col">
            <Input
              inputType={"text"}
              title={"Address"}
              name={"address"}
              id={"address"}
              placeholder={"1234 Main St"}
            />
          </div>
          <div className="col">
            <Input
              inputType={"text"}
              title={"Address 2"}
              name={"address2"}
              id={"address2"}
              placeholder={"Apartment, studio, or floor"}
            />
          </div>
          <div className="form-row">
            <div className="col-md-6">
              <Input
                inputType={"text"}
                title={"City"}
                name={"inputCity"}
                id={"inputCity"}
                placeholder={"City"}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="col-md-2">
              <Input
                inputType={"text"}
                title={"Zip"}
                name={"inputZip"}
                id={"inputZip"}
                placeholder={"Zip"}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
            Order summary
          </div>
          <div className="p-4">
            <p className="font-italic mb-4">
              Shipping and additional costs are calculated based on values you
              have entered.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Order Subtotal </strong>
                <strong>${total}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <input
                  type="text"
                  placeholder="Apply coupon"
                  aria-describedby="btnCoupon"
                  className={`form-control w60 border-0 ${(this.state.validCoupon !== "") ? "" : this.state.validCoupon ? 'valid' : 'invalid'}`}
                  id="textCoupon"
                  onChange={this.handleCouponChange}
                  value={this.state.coupon}
                />
                <button
                  id="btnCoupon"
                  type="button"
                  className="btn btn-dark bg-dark rounded-pill"
                  onClick={this.handleUserInput}
                >
                  <i className="fa fa-gift mr-2"></i>Apply coupon
                </button>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Shipping and handling</strong>
                <strong>FREE</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Tax</strong>
                <strong>$0.00</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Total</strong>
                {showTotal}
              </li>
            </ul>
            <input type="hidden" id="addedItemsInput" value={this.props.addedItems} />
            <button
              type="submit"
              className="btn btn-dark rounded-pill bg-dark w100">
              Procceed to checkout
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedProducts,
    total: state.total,
    products: state.products,
    coupons: state.coupons,
  };
};

export default connect(mapStateToProps)(Checkout);
