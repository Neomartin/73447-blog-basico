import Title from "./components/Title/Title";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage/PostPage";
import Order from "./pages/Order/Order";
import Header from "./Layout/Header/Header";
import OrderSidebar from "./Layout/OrderSidebar/OrderSidebar";
import OrderModal from "./Layout/OrderModal/OrderModal";
import PostDetail from "./pages/PostDetail/PostDetail";
// import { useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <OrderSidebar />

      {/* <OrderModal /> */}

      <Title
        titulo="Blog App"
        subtitle="Un blog para estar comunicados todos"
      />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/cart" element={<Order />} />
  
          <Route path="/post/:id" element={<PostDetail />} />


        </Routes>
      </main>
    </>
  );
}

export default App;
