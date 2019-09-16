import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from "../actions/cartActionTypes";

const initState = {
  products: [
    {
      id: 1,
      title: "The Walking Dead Season 10 T-Shirt",
      desc:
        "As seen on the Season 10 Preview show, this official The Walking Dead Season 10 T-Shirt features a striking design of a Roman numeral X that's formed by Michonne's Katana sword, along with the iconic TWD initials.",
      price: 29.95,
      img:
        "https://cdn.shopify.com/s/files/1/1505/6302/products/wadhoiat10log_e8ae46d6-f272-4a96-acc6-62f1585b6074_1024x1024.jpg?v=1566281093"
    }
  ],
  coupons: [
    {
      id: 1,
      title: "SPECIALFAN",
      discount: ".10"
    }

  ],
  addedProducts: [],
  total: 0,
  totalItems: 0,
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedProduct = state.products.find(product => product.id === action.id);
    //check if the action id exists in the addedProducts
    let existed_product = state.addedProducts.find(
      product => action.id === product.id
    );
    if (existed_product) {
      const totalItems = state.totalItems += 1;
      addedProduct.quantity += 1;
      return {
        ...state,
        total: state.total + addedProduct.price,
        totalItems: totalItems
      };
    } else {
      const totalItems = state.totalItems += 1;
      addedProduct.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedProduct.price;
      return {
        ...state,
        addedProducts: [...state.addedProducts, addedProduct],
        total: newTotal,
        totalItems: totalItems
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let productToRemove = state.addedProducts.find(
      product => action.id === product.id
    );
    let new_products = state.addedProducts.filter(
      product => action.id !== product.id
    );

    //calculating the total
    let newTotal =
      state.total - productToRemove.price * productToRemove.quantity;
    return {
      ...state,
      addedProducts: new_products,
      total: newTotal,
      totalItems: 0
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedProduct = state.products.find(product => product.id === action.id);
    addedProduct.quantity += 1;
    let newTotal = state.total + addedProduct.price;
    const totalItems = state.totalItems += 1;
    return {
      ...state,
      total: newTotal,
      totalItems: totalItems
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedProduct = state.products.find(product => product.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedProduct.quantity === 1) {
      let new_products = state.addedProducts.filter(
        product => product.id !== action.id
      );
      let newTotal = state.total - addedProduct.price;
      const totalItems = state.totalItems -= 1;
      return {
        ...state,
        addedProducts: new_products,
        total: newTotal,
        totalItems: totalItems
      };
    } else {
      addedProduct.quantity -= 1;
      let newTotal = state.total - addedProduct.price;
      let totalItems = state.totalItems -= 1;
      return {
        ...state,
        total: newTotal,
        totalItems: totalItems
      };
    }
  }

  return state;
};

export default cartReducer;
