import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Item from '../Components/Item/Item';
import formatRupiah from '../assets/js/formatRupiah';
import ShowProduct from '../Components/ShowProduct/ShowProduct';


function Product() {
  const allProduct = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.allProducts.find((e) => e.id === Number(productId));
  return (
    <div>
       <ShowProduct
          id={product.id}
          image={product.image}
          category={product.category}
          product_name={product.product_name}
          old_price={formatRupiah(product.old_price)}
          new_price={formatRupiah(product.new_price)}
        />
    </div>
  )
}

export default Product