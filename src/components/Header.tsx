import { useState } from "react"
import { Link, NavLink } from "react-router-dom"


function Header() {
  const [open,setOpen ] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-green-600 p-4 text-white">
      <nav className=" container flex justify-between items-center mx-">
        <Link to="/" className="text-lg font-bold">Fashion Shop</Link>
        <button onClick={toggleMenu} className="block md:hidden text-xl"> &#8801;</button>
        {/* Desktop & Tablet View */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300" : "hover:text-pink-600")}>Home</NavLink>
            </li>
          <li className="">
            <NavLink to="shop" className={({ isActive }) => (isActive ? "text-yellow-300" : "hover:text-pink-600")}>Shop</NavLink>
          </li>
          <li className="">
            <NavLink to="cart" className={({ isActive }) => (isActive ? "text-yellow-300" : "hover:text-pink-600")}>Cart</NavLink>
          </li>
        </ul>
      </nav>
      {/* Mobile View */}
      <div className={`fixed inset-0 bg-green-600 opacity-90 transition-transform  duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <Link onClick={toggleMenu} to="/" className="text-lg ">Home</Link>
        <Link onClick={toggleMenu} to="shop" className="text-lg ">Shop</Link>
        <Link onClick={toggleMenu} to="cart" className="text-lg ">Cart</Link>
        </div>
        
      </div>
    </header>
   
    
      
  )
}

export default Header