import React from "react";
import Layout from "../../components/Layout/Layout.jsx";
import Category from "../../components/Category/Category.jsx";
import Product from "../../components/Product/Product.jsx";
import Carousel from "../../components/Carousel/img/Carousel.jsx";
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}
export default Landing;
