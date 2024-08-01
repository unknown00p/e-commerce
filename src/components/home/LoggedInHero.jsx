import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../formCompo/Button'

function LoggedInHero() {
    return (
        <>
            {/* <div className='relative'>
                <div className='absolute inset-0 bg-black/25 z-10'>
                </div> */}

            <div className='relative'>
                <div className="bg-[url('food5.jpg')] h-[29rem] bg-no-repeat bg-cover bg-fixed brightness-50">
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-base font-bold text-white md:text-4xl">
                        Discover the Secrets of Indian Hidden Delicacies
                        </h1>
                        <p className="mt-6 text-lg text-white md:text-xl">
                            <Button text="VISIT MENU" buttonClass="bg-[#8e8f9d5e] text-[#ffffff] px-4 py-2 rounded-md" type="submit"/>
                        </p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default LoggedInHero
