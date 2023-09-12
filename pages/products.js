import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { styled } from "styled-components";


export default function ProductsPage({products}){
    return (
        <>
            <Header></Header>
            <Center>
                <Title>All products</Title>
                <ProductsGrid products={products}></ProductsGrid>
            </Center>
            
        </>
    );
}

export async function getServerSideProps(){

    await mongooseConnection();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    return {props:{

        products: JSON.parse(JSON.stringify(products)),
    }};
}