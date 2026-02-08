import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../components/ProductCard";
import { useCart } from "../../context/cart-context";
import { getAllCategories } from "../../api/getAllCategories";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const { cart, fav } = useCart();



    useEffect(() => {
        (async () => {
            const categories = await getAllCategories();
            const products = await getAllProducts();
            setProducts(products);
            setAllProducts(products);
            setCategories(categories);
        })()

    }, []);

    const onCategoryClick = (category) => {
        const filterByCategories = allProducts?.length > 0 && allProducts.filter(product => product.category.name.toLowerCase() === category.toLowerCase());
        setProducts(filterByCategories);
    }
    return (
        <>
            <Navbar />
            <main className=" pt-4 ">


                <div className="flex gap-4 justify-center mb-4 flex-wrap">
                    <div 
                        onClick={() => setProducts(allProducts)}
                        className="bg-sky-700 text-white font-semibold rounded-full px-4 py-1 cursor-pointer hover:bg-gray-600 transition"
                    >
                        All
                    </div>

                    {
                        categories?.length > 0 && categories.map(category => <div className="bg-sky-700 text-white font-semibold rounded-full px-4 py-1 cursor-pointer hover:bg-sky-600 transition"
                            onClick={() => onCategoryClick(category.name)} >{category.name}</div>)
                    }
                </div>
                <div className="flex flex-wrap gap-8 justify-center pt-4">
                    {
                        products?.length > 0 ? products.map(product => <ProductCard key={product.id} product={product} />):<h2  className="text-green-600 font-semibold  px-4 py-1 cursor-pointer hover:underline transition">No Products found.</h2>
                    }
                </div>
            </main>
        </>
    )
}