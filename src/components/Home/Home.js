import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="box">
          <h3>Shop Now</h3>
          <Link to="/product">
            <img
              src="https://cdn.shopify.com/s/files/1/1505/6302/t/141/assets/slideshow_image_1_2x.jpg?37725"
              className="w100"
            />
          </Link>
        </div>

      </div>
    );
  }
}

export default Home;
