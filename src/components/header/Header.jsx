import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from '../authentic/logout';
import { Controller, useForm } from 'react-hook-form';
import Cart from '../products/Cart';
import Profile from '../products/Profile';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
import { currentUserData } from '../../store/userSlice';


function Header() {

  const [toggleProfile, setToggleProfile] = useState(false)
  const renderToken = useSelector((state) => state.auth.renderToken)
  const userData = useSelector((state) => state.auth.currentUserData)
  // console.log(userData);
  const Token = Cookies.get("Token")
  const [token, setToken] = useState(Token)
  const navigate = useNavigate()
  const [toggleClass, setToggleClass] = useState("right-[-8.5rem]")

  const items = [
    {
      id: 1,
      name: 'Menu',
      link: '/menu',
      authentication: token
    },
    {
      id: 2,
      name: 'About',
      link: '/about',
      authentication: token
    },

    {
      id: 3,
      name: 'Contact',
      link: '/contact',
      authentication: token
    },

    {
      id: 6,
      name: 'Order Online',
      link: '/order',
      authentication: token
    },

  ]

  function setUserAsToken() {
    if (renderToken) {
      setToken(renderToken)
    } else {
      setToken(null);
    }
  }

  useEffect(() => {
    setUserAsToken()
  }, [renderToken])


  function toggleProfileInfo(params) {
    setToggleProfile(!toggleProfile)
  }

  function cartToggle(e) {
    setToggleClass(prevClass => prevClass === "right-[20rem]" ? "right-[-8.5rem]" : "right-[20rem]")
  }

  document.addEventListener("click", (e) => {
    if (toggleProfile && !e.target.closest("#profile-icon")) {
      setToggleProfile(false)
    }

    // if (!e.target.closest("#cart")) {
    //     setToggleClass("right-[-8.5rem]")
    // }

    // if (!e.target.closest("#cart") && !e.target.closest("#allBox")) {
    //     setToggleClass("right-[-8.5rem]")
    // }
  })


  return (
    <>
      <nav className="flex justify-between relative text-lg text-[#000] bg-[#fffffff9] p-7 px-10">
        <div>
          <Link to='/'>
            <div className='font-playwriteRegular font-bold text-[26px]'>Hidden Delicacies</div>
          </Link>
        </div>


        <div className='flex gap-7'>
          {items.map((item) => (
            token &&
            <div key={item.id}>

              <div className='flex gap-3 items-center roboto-medium'>
                <p><Link className='roboto-regular' to={item.link}>{item.name}</Link></p>
              </div>
            </div>
          ))}
        </div>

        {!token &&
          <Link to="/login"><img src="/profile.svg" alt="" srcSet="" /></Link>
        }

        {token &&
          <div className=''>
            <div className='flex gap-4 items-center'>

              <div>


                <button id='profile-icon' onClick={toggleProfileInfo} className='flex relative items-center gap-1 ml-[67px]'>
                  {/* <Profile /> */}
                  <img src="/profile.svg" alt="" srcSet="" />
                </button>

                {toggleProfile && <div className='flex absolute flex-col ml-[-18px] gap-4 border-[1px] border-[#4e4e4e] w-[8rem] bg-slate-50 mt-2 p-[0.5rem] z-50'>
                  {/* <div>lol</div> */}
                  <div>
                    <Link to={"/profile"}>
                      <button>Profile</button>
                    </Link>
                  </div>
                  <hr />
                  <div><Logout /></div>
                </div>}

              </div>
              {/* <div> */}
              <button onClick={cartToggle}>
                <img id='cart' className='relative' src="/cart.svg" alt="" srcSet="" />
              </button>
              {/* </div> */}
            </div>
            {/* <button onClick={}> */}
            <div id='allBox' className={`${toggleClass} top-[0rem] transition-all fixed z-50 `}>
              <div className="bg-white shadow-lg absolute h-screen z-50 w-80">
                <div className="mx-auto">
                  <div className="flex items-center bg-black p-4">
                    <button onClick={cartToggle}>
                      <img id='dropLeft' src="/dropLeft.svg" alt="" />
                    </button>
                    <h1 className="text-xl ml-20 font-semibold text-white text-center">Your Cart</h1>
                  </div>
                  <div>
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
            {/* </button> */}
          </div>
        }
      </nav>
    </>
  )
}

export default Header