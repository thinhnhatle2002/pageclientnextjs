import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewProduct from "@/components/NewProduct";
import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";

export default function HomePage({featuredProduct,newProducts}){

  

  return(
    <div>
      <Header></Header>
      <Featured product={featuredProduct}></Featured>
      <NewProduct products={newProducts}></NewProduct>
      <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps(){
    const featuredProductId = '64d9ac1fc2f683f99d4d9355';
    await mongooseConnection();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
    return {
      props: {
        
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts)),
      },
    };
}