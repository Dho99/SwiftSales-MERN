import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import formatRupiah from "../assets/js/formatRupiah";
import Button from "react-bootstrap/Button";
import '../assets/css/CartItems.css';

function CartItems() {
  const { allProducts, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div>
      <Container>
        <Table responsive hover className="text-center">
          <thead>
            <tr className="">
              <th>Products</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((p, i) => {
                if(cartItems[p.id]>0){
                    return (
                        <tr key={i} className="">
                            <td><img src={p.image} className="img-fluid w-50 rounded" alt="" /></td>
                            <td className="">{p.product_name}</td>
                            <td>{formatRupiah(p.new_price)}</td>
                            <td>{cartItems[p.id]}</td>
                            <td>{formatRupiah(p.new_price * cartItems[p.id])}</td>
                            <td>
                                <Button variant="danger" size="sm" className="d-flex m-auto"><i className="bi bi-trash"></i></Button>{' '}
                            </td>
                        </tr>
                    )
                }
            })}
    
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default CartItems;
