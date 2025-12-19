import React from "react";
import ProductList from "../components/whatWeOffer/ProductList";
import ConsumerUsage from "../components/whatWeOffer/ConsumerUsage";
import CSR from "../components/whatWeOffer/CSR";
import MysteryShopper from "../components/whatWeOffer/MysteryShopper";
import RetailVisibility from "../components/whatWeOffer/RetailVisibility";

const Products = () => {
  return (
    <div>
      <ProductList />
      <ConsumerUsage />
      <MysteryShopper />
      <RetailVisibility />
      <CSR />
    </div>
  );
};

export default Products;
