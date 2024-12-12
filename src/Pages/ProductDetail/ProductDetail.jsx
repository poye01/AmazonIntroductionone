import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import ProductCard from "../../components/Product/ProductCard";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endpoints";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [productId]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>
      )}
    </Layout>
  );
}

export default ProductDetail;
