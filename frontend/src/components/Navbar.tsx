import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface classes {
    inputWidth: String,
    buttonBorder: String,
    AppLogo: String
}

function Navbar() {
    const [uiClasses, setUiClasses] = useState<classes>({
        inputWidth: "w-[0rem]",
        buttonBorder: "border-b-0",
        AppLogo: "absolute"
    })
    const [sideBarcss, setSideBarcss] = useState<String>("left-[-300px]")

    function searchFuc(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (uiClasses.inputWidth == "w-[8rem]") {
            console.log("Intigrate search")
        } else {
            setUiClasses({
                inputWidth: "w-[10rem]",
                buttonBorder: "border-b-[1.3px]",
                AppLogo: "hidden"
            })
        }
    }

    function closeInp(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setUiClasses({
            inputWidth: "w-[0rem]",
            buttonBorder: "border-b-0",
            AppLogo: "absolute"
        })
    }

    return (
        <>
            <div className=''>
                <div className="">
                    <div className={`header-bg flex fixed w-full bg-white text-black items-center justify-between px-7 z-20 py-4 text-[1.11rem] max-w-[1440px]`}
                    >
                        <div className='flex items-center gap-5'>
                            <button className='' id='mainMenu' onClick={() => setSideBarcss("left-0")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>
                            </button>

                            <div className={`sm:flex hidden gap-6 font-light items-center justify-center`}>
                                <Link to={"/products"}>Shop</Link>
                                <p>FAQ</p>
                                <p>Contact</p>
                            </div>
                        </div>

                        <Link to={"/"} className={`${uiClasses.AppLogo} poppins-regular left-1/2 transform -translate-x-1/2 md:text-3xl text-2xl`}>
                            <span>IR - P A N D A</span>
                        </Link>

                        {
                            <div className='flex items-center justify-center sm:gap-7 gap-3'>
                                <form className='flex'>
                                    <input
                                        className={`max-w-[15rem] lg:w-[10rem] md:w-[7rem] ${uiClasses.inputWidth} block rounded-r-none bg-[#00000000] text-black h-10 text-[1.1rem] outline-none border-[#0a280b] border-t-0 border-l-0 border-r-0 border-b-[1.3px] placeholder:text-[#a7a5a5] placeholder:text-sm transition-all`}
                                        placeholder="Search"
                                    />

                                    <div className={`border-t-0 border-l-0 border-r-0 md:border-b-[1.3px] ${uiClasses.buttonBorder} items-center rounded-l-none outline-none border-[#0a280b] flex cursor-pointer`}>

                                        <div className='flex items-center gap-2 md:hidden'>
                                            <button className='' onClick={searchFuc}>
                                                <img className='' src="/search.svg" alt="" />
                                            </button>

                                            <button onClick={closeInp} className={`${uiClasses.inputWidth == "w-[10rem]" ? "block" : "hidden"}`}>
                                                <img src="/closeInp.svg" alt="" />
                                            </button>
                                        </div>

                                        <button className='md:block hidden' onClick={() => { console.log("hello") }}>
                                            <img className='' src="/search.svg" alt="" />
                                        </button>
                                    </div>
                                </form>

                                <div className='flex'>
                                    <div className='lg:flex hidden items-center p-[15px] gap-2'>
                                        <div>
                                            <img src="user-1.svg" alt="" />
                                        </div>
                                        <div className='flex items-center font-[350] text-base ml-[5] gap-2'>
                                            <p>Log in</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center font-[350] text-base ml-5 gap-2">
                                        <Link to='/cart' className="relative">
                                            <img src="bag.svg" alt="Bag Icon" />
                                            <div className="absolute text-black px-1 rounded-full text-[9px] top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                                                0
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div>
                    <div onClick={() => setSideBarcss("left-[-300px]")} className={`${sideBarcss == "left-0" ? "fixed" : "hidden"} w-screen top-0 z-40 h-screen bg-[#2827274a]`}>
                    </div>
                    <aside id="logo-sidebar" className={`fixed ${sideBarcss} overflow-hidden top-0 w-64 h-screen transition-all z-50`} aria-label="Sidebar">
                        <div className="h-full px-3 py-4 bg-gray-50 dark:bg-[#37372c]">

                            <div className='flex justify-between items-center pb-5 gap-5 pl-1'>
                                <div className='cursor-pointer' onClick={() => setSideBarcss("left-[-300px]")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                                </div>

                                <div className="flex items-center ps-2.5">
                                    <div className='flex items-center gap-1'>
                                        <img className='w-[2.5rem]' src="/youtube-video.svg" alt="" srcSet="" />
                                        <span className='text-white text-[2rem]'>IR</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-2 h-[88vh] font-medium pb-3 overflow-auto scrollbar">
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/home.svg" alt="" />
                                        <span className="ms-3">Home</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/subscription.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Shop</span>
                                    </div>
                                </li>
                                <div className='border-[0.2px] opacity-10'></div>

                                <div className='flex text-xl items-center w-[5rem] mt-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group p-2 cursor-pointer'>
                                    <div className=''>
                                        You
                                    </div>
                                    <img src="/chevronRight.svg" alt="" />
                                </div>
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/currentUser.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Your Cart</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/history.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Shop history</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/playlist.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Contact US</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/videos.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Your Profile</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/like.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Liked videos</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/download.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Downloads</span>
                                    </div>
                                </li>

                                <div className='border-[0.2px] opacity-10'></div>
                                {/* <div className='flex text-xl items-center w-[9rem] mt-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group p-2 cursor-pointer'>
                                    <div className=''>
                                        Subscriptions
                                    </div>
                                </div>

                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/like.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Liked videos</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex slideLeft items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#100628] group">
                                        <img src="/download.svg" alt="" />
                                        <span className="flex-1 ms-3 whitespace-nowrap">Downloads</span>
                                    </div>
                                </li> */}

                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Navbar

{/* <header className='hidden lg:flex items-center justify-between px-[24px] bg-[#252B42] text-[#ffffff]'>
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
</header> */}
{/* <div className='md:flex hidden'>
                            <p className='text-sm font-bold text-[#737373]'>Home</p>
                            <Link to={"/products"} className='ml-[15px] flex items-center'>
                                <p className='text-sm font-medium text-[#252B42]'>Shop</p>
                                <img src="chevronDown.svg" alt="" />
                            </Link>
                            <p className='ml-[15px] text-sm font-bold text-[#737373]'>About</p>
                            <p className='ml-[15px] text-sm font-bold text-[#737373]'>Blog</p>
                            <p className='ml-[15px] text-sm font-bold text-[#737373]'>Contact</p>
</div> */}

{/* <nav>
                <div className='flex justify-between items-center my-[23px] mx-[32px]'>
                    <div className='flex items-center'>
                    </div>

                    <div>
                        <Link to={"/"} className='w-[187px] text-[24px] font-bold text-[#252B42]'>bandage</Link>
                    </div>

                    <div className='flex items-center gap-4 text-[#23A6F0]'>
                        <div className='flex ml-[10px] gap-2'>
                            <div className=''>
                                <img src="facebook.svg" alt="" />
                            </div>
                            <div>
                                <img src="instagram.svg" alt="" />
                            </div>
                            <div className=''>
                                <img src="twitter.svg" alt="" />
                            </div>
                        </div>
                        <div className='lg:flex hidden items-center p-[15px] gap-2'>
                            <div>
                                <img src="user-1.svg" alt="" />
                            </div>
                            <div className='flex items-center font-[350] text-base ml-[5] gap-2'>
                                <p>Log in</p>
                            </div>
                        </div>

                        <div className='flex items-center font-[350] text-base ml-[5] gap-2'>
                            <p>Cart (0)</p>
                        </div>
                    </div>
                </div>
</nav> */}