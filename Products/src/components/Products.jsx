import { useEffect, useState } from 'react';
import './Products.css'; // Import your CSS file

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [show, setShow] = useState(true);

    const callProducts = async () => {
        let { products } = await fetch("https://dummyjson.com/products/category/smartphones").then((res) => res.json());
        setProductList(products);
    }

    useEffect(() => {
        callProducts();
    }, []);

    const handleImageClick = (index) => {
        setSelectedProduct(productList[index]);
    }

    return (
        <div>
            <button onClick={() => {
                setShow(prev => !prev);
            }}>
                Show & Hide
            </button>
            <div className="product-container">
                {show ? productList.map((item, index) => {
                    let { images, title, } = item;
                    return (
                        <div className="product-card" key={index}>
                            <h1 className='title'>Title: {title}</h1>
                            <img
                                src={images[0]}
                                alt={title}
                                onClick={() => handleImageClick(index)}
                            />
                        </div>
                    )
                }) : <div className="product-card">I am Hidden now</div>}
            </div>
            {selectedProduct && (
                <div className="selected-product">
                    <h1>{selectedProduct.title}</h1>
                    <p>{selectedProduct.description}</p>
                    <button onClick={() => setSelectedProduct(null)}>Close</button>
                </div>
            )}
        </div>
    )
}

export default Products;
