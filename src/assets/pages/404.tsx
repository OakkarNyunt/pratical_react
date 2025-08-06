import { Link } from "react-router-dom"


function NotFound() {
  return (
    <>
      <div className="flex grow text-center items-center justify-center">
        <div className="p-8">
          <p className="text-3xl md:text-5xl">404 - Page Not Found</p>
          <p className="my-8 text-red-500 text-xl md:text-3xl">The page you are looking for does not exist!</p>
          <Link to="/" className=" bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
            Go back to Home
          </Link>
        </div>      
      </div>    
    </>
  )
}

export default NotFound