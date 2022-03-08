import React from "react";
import "./Products.css";
import Product from "./Product/Product";
import { connect } from "react-redux";

const Products = ({}) => {
  // console.log(products);
  return (
    <div>
      <Product />
    </div>
  );
};

// const mapStateToProps = (state: any) => {
//   console.log(state);
//   return {
//     products: state.shop.products,
//   };
// };
export default Products;
// export default connect(mapStateToProps)(Products);
