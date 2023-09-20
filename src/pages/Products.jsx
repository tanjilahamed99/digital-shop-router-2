import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const productsData = useLoaderData();
    const products = productsData.products;
    return (
        <div className="grid grid-cols-3 container mx-auto gap-10  mt-10">
            {
                products.map((product) => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;