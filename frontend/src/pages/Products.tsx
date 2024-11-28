import React from 'react'
import { Link } from 'react-router-dom'
import image24 from '../assets/image24.jpg'
import image25 from '../assets/image25.jpg'
import image26 from '../assets/image26.jpg'
import image27 from '../assets/image27.jpg'
import image28 from '../assets/image28.jpg'
import image29 from '../assets/image29.jpg'

function Products() {
  return (
    <div className='bg-white'>
      <div className='lg:max-w-[1124px] md:max-w-[688px] max-w-[311px] m-auto pt-28'>

        <div className='flex roboto-light gap-2 mb-9 '>
          <p>Home</p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
          </p>
          <p>Browse by</p>
        </div>

        <div className="flex gap-14">
          <div className='Filter sm:block hidden w-1/4'>
            <h1 className='roboto-medium text-3xl'>Browse by</h1>
            <p className='border-b border-neutral-400 mt-5 my-2'></p>

            <div className='flex flex-col gap-3 roboto-medium text-base'>
              <div className='cursor-pointer'>All Products</div>
              <div className='cursor-pointer'>Best Sellers</div>
              <div className='cursor-pointer'>Male</div>
              <div className='cursor-pointer'>Female</div>
              <div className='cursor-pointer'>Kid</div>
            </div>

            <div className="mt-14">
              <h1 className='mt-9 roboto-medium text-3xl'>Filter by</h1>
              <p className='border-b border-neutral-400 my-4'></p>
              <div className='flex justify-between roboto-medium text-base'>
                <p>Price</p>
                <img src="plus.svg" alt="" />
              </div>
              <p className='border-b border-neutral-400 my-4'></p>
              <div className='flex justify-between roboto-medium text-base'>
                <p>Size</p>
                <img src="plus.svg" alt="" />
              </div>
              <p className='border-b border-neutral-400 my-4'></p>
            </div>

          </div>

          <div className="right w-full">
            <h1 className="roboto-bold text-5xl">All Products</h1>
            <div className='flex justify-between mt-12 roboto-light'>
              <p>40 Products</p>
              <div className='flex items-center gap-2'>
                <p>Sort by : Recommended</p>
                <p className='rotate-90'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-6 mt-5'>
              {[{ image: image24 }, { image: image25 }, { image: image26 }, { image: image27 }, { image: image28 }, { image: image29 }].map((item, index) =>
                <div key={index} className='cursor-pointer'>
                  <img className='w-72 h-96 object-cover rounded-3xl' src={item.image} alt="" />
                  <div className='flex flex-col items-center justify-center gap-1 mt-5'>
                    <h1 className='roboto-medium text-lg'>I am a product</h1>
                    <p className='Merriweather-price text-[#675b17]'>$ 122.00</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products

{/* <div className='py-6 flex justify-between items-center'>
        <h3 className='text-[#252B42] text-2xl font-bold'>Shop</h3>
        <div className='flex gap-4 items-center'>
          <Link className='text-[#252B42] text-sm font-bold' to={"/"}>Home</Link>
          <div className='-rotate-90'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
          </div>
          <h6 className='text-sm font-bold text-[#BDBDBD]'>Shop</h6>
        </div>
      </div>

      <div className='grid lg:grid-cols-5 sm:grid-cols-3 pb-12 gap-4 text-white'>
        <div className='bg-image7 bg-cover bg-center md:max-h-[223px] sm:h-[223px] h-[300px] w-full flex items-center justify-center flex-col gap-[10px]'>
          <h5 className='text-base font-bold'>Clothes</h5>
          <p className='text-base'>5 items</p>
        </div>
        <div className='bg-image9 bg-cover bg-center md:max-h-[223px] sm:h-[223px] h-[300px] w-full text-white flex items-center flex-col justify-center'>
          <h5 className='text-base font-bold'>Clothes</h5>
          <p className='text-base'>5 items</p>
        </div>
        <div className='bg-image5 bg-cover bg-center md:max-h-[223px] sm:h-[223px] h-[300px] w-full text-white flex items-center flex-col justify-center'>
          <h5 className='text-base font-bold'>Clothes</h5>
          <p className='text-base'>5 items</p>
        </div>
        <div className='bg-image10 bg-cover bg-center md:max-h-[223px] sm:h-[223px] h-[300px] w-full text-white flex items-center flex-col justify-center'>
          <h5 className='text-base font-bold'>Clothes</h5>
          <p className='text-base'>5 items</p>
        </div>
        <div className='bg-image2 bg-cover bg-center md:max-h-[223px] sm:h-[223px] h-[300px] w-full text-white flex items-center flex-col justify-center'>
          <h5 className='text-base font-bold'>Clothes</h5>
          <p className='text-base'>5 items</p>
        </div>
</div> */}