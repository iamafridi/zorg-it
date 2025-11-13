import React from 'react'
import HerosectionImage from '../../../assets/Banner/Mask Group.png'

const Banner = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className='w-full h-full object-cover'
                    src={HerosectionImage}
                    alt="Hero Background"
                />
            </div>

            {/* Dark overlay for better contrast */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div> */}

            {/* Text Content */}
            <div className="relative z-10 text-center max-w-4xl px-4 py-20">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    <span className="bg-linear-to-r from-[#FFFFFF]/40 via-[#FFFFFF] to-[#FFFFFF]/40 bg-clip-text text-transparent">
                        We Shape Your Ideas Into
                    </span>
                    <br />
                    <span className="bg-linear-to-r from-[#FFFFFF]/40 via-[#FFFFFF] to-[#FFFFFF]/40 bg-clip-text text-transparent">
                        Awesome Digital
                    </span> <br />
                    <span className="bg-linear-to-r from-[#FFFFFF]/40 via-[#FFFFFF] to-[#FFFFFF]/40 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
                </p>

                <button className="bg-linear-to-r from-blue-300 to-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                    Book a call with us
                </button>
            </div>
        </section>
    )
}

export default Banner