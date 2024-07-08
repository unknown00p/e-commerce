import React from 'react'
import { Link } from 'react-router-dom'

function LoggedOutHero() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mr-auto place-self-center lg:flex-1">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Find Your Ideal Bag for Any Occasion
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Discover the perfect bag for every occasion in our curated collection. From chic clutches to versatile totes, find your style match today!
                        </p>
                        <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Log in
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="hidden lg:block lg:flex-1 lg:mt-0">
                        <img src="./bag6.png" alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoggedOutHero
