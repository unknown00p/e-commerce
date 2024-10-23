import { useState } from 'react'
// import image1 from './assets/image1.jpg'
// import image2 from './assets/image2.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1440px] mx-auto'>
      <header className='hidden lg:flex items-center justify-between px-[24px] pt-[9px] bg-[#252B42] text-[#ffffff]'>
        <div className='flex items-center h-[46px]'>

          <div className='flex items-center p-[10px]'>
            <img src="phone.svg" alt="" />
            <h6 className='font-bold text-sm ml-[5px]'>(225) 555-0118</h6>
          </div>

          <div className='flex items-center ml-[10px] p-[10px]'>
            <img src="mail.svg" alt="" />
            <h6 className='font-bold text-sm ml-[5px]'>michelle.reverra@Example.com</h6>
          </div>
        </div>

        <div className='p-[10px] font-bold text-sm'>
          follow us and get chance to win 80% off
        </div>

        <div className='flex items-center p-[10px]'>
          <p className='text-sm font-bold'>Follow us: </p>
          <div className='flex ml-[10px]'>
            <div>
              <img src="instagram.svg" alt="" />
            </div>
            <div className='ml-[6px]'>
              <img src="youtube.svg" alt="" />
            </div>
            <div className='ml-[6px]'>
              <img src="facebook.svg" alt="" />
            </div>
            <div className='ml-[6px]'>
              <img src="twitter.svg" alt="" />
            </div>
          </div>
        </div>
      </header>

      <nav>
        <div className='flex justify-between items-center my-[23px] mx-[32px]'>
          <div className='flex items-center'>
            <p className='w-[187px] text-[24px] font-bold text-[#252B42]'>bandage</p>
            <div className='md:flex hidden'>
              <p className='text-sm font-bold text-[#737373]'>Home</p>
              <div className='ml-[15px] flex items-center'>
                <p className='text-sm font-medium text-[#252B42]'>Shop</p>
                <img src="chevronDown.svg" alt="" />
              </div>
              <p className='ml-[15px] text-sm font-bold text-[#737373]'>About</p>
              <p className='ml-[15px] text-sm font-bold text-[#737373]'>Blog</p>
              <p className='ml-[15px] text-sm font-bold text-[#737373]'>Contact</p>
              <p className='ml-[15px] text-sm font-bold text-[#737373]'>Pages</p>
            </div>
          </div>

          <div className='flex items-center text-[#23A6F0]'>
            <div className='lg:flex hidden items-center p-[15px]'>
              <img src="user.svg" alt="" />
              <div className='flex items-center font-bold text-sm ml-[5] gap-2'>
                <p>Login</p>
                /
                <p>Signup</p>
              </div>
            </div>

            <div className='flex gap-5 lg:gap-0'>
              <p className='lg:p-[15px]'><img className='sm:w-[16px] sm:h-[16px]' src="search.svg" alt="" /></p>
              <p className='lg:p-[15px]'><img className='sm:w-[16px] sm:h-[16px]' src="cart.svg" alt="" /></p>
              <p className='lg:p-[15px]'><img className='sm:w-[16px] sm:h-[16px]' src="menubar.svg" alt="" /></p>
            </div>
          </div>
        </div>
      </nav>

      <main className='bg'>
        <div className='bg-image2 bg-cover bg-no-repeat max-w-[1440px] mx-auto'>
          <div className='flex flex-col md:py-[112px] sm:justify-center items-center sm:items-start w-full lg:w-[60%] sm:w-[70%] mx-auto min-h-screen md:min-h-[50vh] gap-8 sm:px-0 px-16 pt-9 sm:pt-0 sm:text-white text-[#252b42] sm:pb-0 pb-3'>

            <h3 className='sm:text-sm text-[16px] font-bold'>Winter 2024</h3>
            <h1 className='sm:text-[58px] text-[40px] font-bold text-center'>NEW COLLECTION</h1>
            <h4 className='sm:text-sm text-[20px] text-center'>We know how large objects will act, but things on a small scale...</h4>
            <button className='px-[40px] py-[15px] text-[24px] font-bold bg-blue-500 text-white'>Shop now</button>

          </div>
        </div>
      </main>

      <div className='py-[80px] max-w-[1124px] sm:w-full w-[333px] m-auto'>

        <div>
          <p className='text-[24px] font-bold text-[#252B42] text-center'>EDITOR'S PICK</p>
          <p className='text-sm text-[#737373] text-center'>
            Problems trying to resolve
            the conflict between
          </p>
        </div>

        <div>
          
        </div>

      </div>

    </div>
  )
}

export default App
