import React from 'react'
import { Link } from 'react-router-dom'

function LoggedInHero() {
    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto px-6 py-16 justify-center flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
                            Welcome to Morlex
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 md:text-xl">
                            Explore our wide range of top-quality products that fit every budget. find everything you need at unbeatable prices!
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/shop"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/1 mt-12 md:mt-0 flex justify-center">
                        <img
                            src="/bag3.png"
                            alt="Hero"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoggedInHero
