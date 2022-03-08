import React from "react";
import { Button, Stack } from "@mui/material";

import "./Product.css";
const Product = () => {
  return (
    <div className="productSingleContainer">
      <div className="productSingleContainerImage">
        <img src={require("../../../assets/vivo.png")} alt="cart"></img>
      </div>
      <hr />
      <div className="productSingleContainerContents">
        <h2>
          <span>Model Name:</span> Vivo Y21T (Midnight Blue, 4GB RAM, 128GB ROM)
        </h2>
        <p>
          <span>Description:</span> lorem lorem lorem lorem loremlorem
        </p>
        <p>
          <span>Brand:</span> vivo
        </p>
        <p>
          <span>M.R.P.:</span> $ 19,999
        </p>
        <p>
          <span>Memory Storage:</span> 1000 GB
        </p>
        <Stack spacing={2} direction="row" className="Btns">
          <Button color="secondary" size="small" variant="contained">
            view Item
          </Button>
          <Button color="success" size="small" variant="contained">
            Add To Cart
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Product;
