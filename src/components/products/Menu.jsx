import React, { useEffect, useState } from 'react'
import { category } from '../../store/category'
import { useSelector } from 'react-redux'
import { getCategories } from '../../FetchFunc/fetchCategory'
import { getProductsByCategory } from '../../FetchFunc/fetchProducts'
import { Input } from "../index"
import { useForm } from 'react-hook-form'

function Menu() {
  const product = useSelector((state) => state.product.products)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  async function ProductByCategory(selectedCategories) {
    console.log(selectedCategories);
    if (selectedCategories > 1) {
      selectedCategories.forEach(async categories => {
        const response = await getProductsByCategory(categories)
        setProducts([...products, ...response.data])
        console.log(response);
      });
    }else{
      const response = await getProductsByCategory(selectedCategories)
      console.log(response);
    }
    
    console.log(products);
  }

  useEffect(() => {
    async function fetchCategory(params) {
      const allCategories = await getCategories()
      setCategories(allCategories.data.data.categories)
    }

    fetchCategory()
    
  }, [])

  function checkedParams(id) {
    if (selectedCategories.includes(id)) {
      const filterd = selectedCategories.filter((category)=> category !== id)
      setSelectedCategories(filterd)
    }else{
      setSelectedCategories([...selectedCategories,id])
    }
  }

  useEffect(() => {
    console.log(selectedCategories);
    ProductByCategory(selectedCategories)
  }, [selectedCategories])

  return (
    <>

      <div className="w-64 h-screen p-6 bg-gray-50 border-r border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Filter by</h2>

        <div>
          <h3 className="text-md font-medium text-gray-900 mb-2">Category</h3>
          <ul className="space-y-1">
            {categories && categories.map(category => (
              <li key={category._id}>
                <form>
                  <label className="inline-flex items-center">
                    <Input
                      type="checkbox"
                      classname="form-checkbox text-blue-600"
                      checked={selectedCategories.includes(category._id)}
                      onChange={()=>{checkedParams(category._id)}}
                    />
                    <span className="ml-2 text-gray-700">{category.name}</span>
                  </label>
                </form>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product._id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.mainImage.url}
                    src={product.mainImage.url}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className='flex gap-2 flex-col'>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div> */}

    </>
  )
}

export default Menu
