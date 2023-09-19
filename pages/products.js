import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { styled } from "styled-components";

const HeightCentervsFooter = styled.div`
    margin-bottom: 1000px;
`;



export default function ProductsPage({products}){
    return (
        <>
            <Header></Header>
            <HeightCentervsFooter>
                <Center>
                    <Title>All products</Title>
                    <ProductsGrid products={products}></ProductsGrid>
                </Center>
            </HeightCentervsFooter>
           
            <Footer></Footer>
            
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