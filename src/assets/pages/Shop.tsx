
import s1 from '@/assets/images/s1.jpeg'
import s2 from '@/assets/images/s2.jpg' 
import s3 from '@/assets/images/s3.jpg'
import Products from '@/components/Products'

const products = [
  {
    id: 1,
    name: 'Speaker 1',
    price: 29.99,
    image: s1,
  },
  {
    id: 2,
    name: 'Speaker 2',
    price: 39.99,
    image: s2,
  },
  {
    id: 3,
    name: 'Speaker 3',
    price: 49.99,
    image: s3,
  },
]
function Shop() {
  return (
    <section className="flex grow bg-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map ((product) => (
          <div key={product.id}  >
            <Products {...product}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Shop