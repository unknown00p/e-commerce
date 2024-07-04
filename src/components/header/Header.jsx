import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from '../authentic/logout';
import { Controller, useForm } from 'react-hook-form';
import Cart from '../products/Cart';
import Profile from '../products/Profile';

function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const [loading, setLoading] = useState(false)
    const userData = useSelector((state) => state.auth.userData)
    const [toggleProfile, setToggleProfile] = useState(false)
    const [toggleCart, setToggleCart] = useState(false)
    const isToken = localStorage.getItem("accessToken")
    const [user, setUser] = useState(isToken)
    const [namefirstLatter, setNamefirstLetter] = useState("")

    // console.log(userData);


    const items = [
        {
            id: 1,
            name: 'Shop',
            link: '/shop',
            authentication: isToken
        },
        {
            id: 2,
            name: 'About',
            link: '/about',
            authentication: isToken
        },

        {
            id: 3,
            name: 'Contact',
            link: '/contact',
            authentication: isToken
        },

        // {
        //     id: 5,
        //     name: 'Login',
        //     link: '/login',
        //     authentication: !authStatus
        // },
        {
            id: 6,
            name: 'Categories',
            link: '/category',
            authentication: isToken
        },

    ]

    useEffect(() => {
        function makeProfile() {
            
            if (userData) {
                setUser(userData);
            }

            if (user) {
                const username = user?.username;
                const userFirstName = username?.charAt(0);
                setNamefirstLetter(userFirstName);
            }
        }

        makeProfile();
    },[user,userData]);

    function toggleProfileInfo(params) {
        setToggleProfile(!toggleProfile)
        // const body = document.body
    }

    // function toggleCartItems(params) {
    //     setToggleCart(!toggleCart)
    //     // const body = document.body
    // }

    function cartToggle(params) {
        const cart = document.getElementById("cart").style.right = "-0.5rem"
        console.log(cart);
    }

    document.addEventListener("click", (e) => {
        if (toggleProfile && !e.target.closest("#profile")) {
            setToggleProfile(false)
        }
    })

    return (
        <>
            <nav className="flex justify-between relative text-lg text-[#000] bg-[#fffffff9] p-7 px-10">
                <div>
                    <Link to='/'>
                        <div className='font-playwriteRegular font-bold text-[26px]'>Morlex</div>
                    </Link>
                </div>


                <div className='flex gap-7'>
                    {items.map((item) => (
                        isToken &&
                        <div key={item.id}>

                            <div className='flex gap-3 items-center roboto-medium'>
                                <p><Link className='roboto-regular' to={item.link}>{item.name}</Link></p>
                            </div>
                        </div>
                    ))}
                </div>

                {!isToken &&
                    <Link to="/login"><img src="/profile.svg" alt="" srcSet="" /></Link>
                }

                {isToken &&
                    <div className=''>
                        <div className='flex gap-4'>

                            <div id='profile'>

                                <button id='profile-icon' onClick={toggleProfileInfo} className='flex relative items-center gap-1 ml-[67px]'>
                                    <Profile/>
                                    <img src="/dropDown.svg" alt="" srcSet="" />
                                </button>

                                {toggleProfile && <div className='flex absolute flex-col ml-[-18px] gap-2 border-[1px] border-[#4e4e4e] w-[8rem] bg-slate-50 mt-2 p-[0.5rem]'>
                                    {/* <div>lol</div> */}
                                    <div><Logout /></div>
                                </div>}

                            </div>
                            <div>
                                <button onClick={cartToggle}>
                                    <img className='relative' src="/cart.svg" alt="" srcSet="" />
                                </button>

                            </div>
                        </div>
                        {/* <button onClick={}> */}
                        <div id='cart' className='top-[-4rem] right-[-21rem] relative'>
                            <Cart />
                        </div>
                        {/* </button> */}
                    </div>
                }
            </nav>
        </>
    )
}

export default Header