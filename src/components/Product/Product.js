import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from '../actions/cartActions';
import './product.css';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      itemAdded: false
    };
  }

  handleClick = (id)=>{
    this.props.addToCart(id);
    this.setState({itemAdded: true});
    setTimeout(() => {
      this.setState({itemAdded: false});
    }, 3000)
  }

  render() {
    let productList = this.props.products.map(product => {
      return(
        <div className="card" key={product.id}>
          <div className="card-image">
            <img src={product.img} alt={product.title}/>
            <span className="card-title">{product.title}</span>
            { this.state.itemAdded ?
                (<div className="alert alert-success" role="alert">Item Added!</div>)
                :
                (<span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(product.id)}}>
                  <i className="material-icons">add</i>
                </span>)
            }
          </div>
          <div className="card-content">
            <p>{product.desc}</p>
            <p><b>Price: ${product.price}</b></p>
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        <h3 className="center">The Walking Dead Items</h3>
        <div className="box">
          {productList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
