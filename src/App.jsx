import Title from "./components/Title/Title";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage/PostPage";
import Order from "./pages/Order/Order";
import Header from "./Layout/Header/Header";
import OrderSidebar from "./Layout/OrderSidebar/OrderSidebar";
import OrderModal from "./Layout/OrderModal/OrderModal";
// import { useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <OrderSidebar /> */}
      {/* <OrderModal /> */}
      <Title
        titulo="Blog App"
        subtitle="Un blog para estar comunicados todos"
      />
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/cart" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
