import React, { useEffect, useState } from 'react'
import { getCategories } from '../../FetchFunc/fetchEcommerceApi'

function Category() {

  const [categories, setCategories] = useState(null)
  async function getAllCategory(params) {
    const getCategory = await getCategories()
    setCategories(getCategory.data.data.categories);
    console.log(getCategory.data.data.categories);
  }

  useEffect(() => {
    getAllCategory()
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {categories && categories.map((category) => (
          <div key={category.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Category
