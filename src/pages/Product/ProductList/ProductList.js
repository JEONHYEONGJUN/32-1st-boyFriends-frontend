import React, { useEffect, useState } from 'react';
import ProductNavTab from './ProductNavTab/ProductNavTab';
import ProductFilterTab from './ProductFilterTab/ProductFilterTab';
import Product from './Product/Product';
import '../ProductList/ProductList.scss';

function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: '',
      price: 0,
      stock: 0,
      img: null,
      reviewCount: null,
      reputation: null,
      descript: null,
      status: null,
      sale: null,
    },
  ]);
  const [isGrid, setIsGrid] = useState(true);

  // http://10.58.1.245:8000/products/productslist
  useEffect(() => {
    fetch('/data/ProductListMock/ProductListMock.json')
      .then(res => res.json())
      .then(result => {
        setProducts(result);
      });
  }, []);

  const sortProductsPrice = () => {
    let newProducts = [...products];
    newProducts.sort((a, b) => a.price - b.price);
    setProducts(newProducts);
  };

  const sortReview = () => {
    let newProducts = [...products];
    newProducts.sort((a, b) => b.reviewCount - a.reviewCount);
    setProducts(newProducts);
  };

  const sortReputation = () => {
    let newProducts = [...products];
    newProducts.sort((a, b) => b.reputation - a.reputation);
    setProducts(newProducts);
  };

  const isViewChange = e => {
    let name = e.target.className;
    if (name === 'doubleGrid') {
      setIsGrid(false);
    } else if (name === 'fiveGrid') {
      setIsGrid(true);
    }
  };

  return (
    <div className="productList">
      <div className="contentWrapper">
        <div className="navContent">
          <ProductNavTab products={products} />
          <ProductFilterTab
            sortProductsPrice={sortProductsPrice}
            sortReputation={sortReputation}
            sortReview={sortReview}
            isViewChange={isViewChange}
          />
        </div>
        <main className="categoryMain">
          <div className="categoryList">
            <ul className={isGrid ? 'fiveGrids' : 'doubleGrid'}>
              {products.map(products => (
                <Product products={products} key={products.id} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductList;
