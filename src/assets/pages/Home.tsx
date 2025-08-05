import { Link } from "react-router-dom"


function Home() {
  return (
    <section className="flex grow bg-gray-200 justify-center items-center h-full">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold md:text-5xl">Welcome to our Fashion Shop</h1>
        <p className="text-lg md:text-2xl my-8">This is a single landing Page built React, TypeScript and Taildwind CSS</p>
        <Link to="shop" className="bg-green-600 py-2 px-4 text-white rounded hover:bg-green-800 transition-colors duration-300">
          Get Started.
        </Link>
      </div>
    </section>
  )
}

export default Home