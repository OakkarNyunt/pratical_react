

function Products({ name, price, image}: {id: number, name: string, price: number, image: string}) {
  return (
    <>
    <div className="mt-5 p-4 bg-white shadow-md rounded-lg">
        <div className="w-full h-64">
            <img src={image} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="flex justify-between mt-2">
            <div className="">
                <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-600">${price}</p>
            </div>
            <div className="">
                <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600">Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products