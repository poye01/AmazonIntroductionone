import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Loader from "../../components/Loader/Loader";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/Product/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endpoints";
function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category /{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} renderAdd={true}
              renderDesc={false}/>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
