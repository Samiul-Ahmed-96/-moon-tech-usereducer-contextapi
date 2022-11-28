import React from "react";
import { useProducts } from "../context/ProductProvider";

const Home = () => {

  const {state:{products}} = useProducts();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map((product)=> console.log(product))
      }
    </div>
  );
};

export default Home;
