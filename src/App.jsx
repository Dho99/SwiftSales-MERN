import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Shop from "./Pages/Shop";
import allProducts from "./assets/Dummy/allProduct";
import Product from "./Pages/Product";
import LoginSignUp from "./Pages/LoginSignUp";
import ShopCategory from "./Pages/ShopCategory";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Shop />} />
          {allProducts.map((category, index) => (
            <Route
              path={"/category/" + category.category}
              key={index}
              element={<ShopCategory category={category.category} />}
            />
          ))}
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Shop />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
