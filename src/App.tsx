import Home from "@/assets/pages/Home"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Shop from "@/assets/pages/Shop"
import Cart from "@/assets/pages/Cart"
import NotFound from "@/assets/pages/404"


function App() {
  return (
    <>
      
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header /> 
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="shop" element={<Shop />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
      <Footer />
        </div>
        
      </Router>
      
      
    </>
  )
}

export default App