import React from 'react'
import HerosectionImage from '../../../assets/Banner/Mask Group.png'
import Navbar from '../../shared/Navbar/Navbar'
import CompanyLogo from '../companyLogo/companyLogo'

const Banner = () => {
    return (
        <section className="relative min-h-screen text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className='w-full h-full object-cover'
                    src={HerosectionImage}
                    alt="Hero Background"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Navbar */}
                <div className="pt-4 z-99 md:pt-6">
                    <Navbar />
                </div>

                {/* Text Content - Centered */}
                <div className="grow flex items-center justify-center">
                    <div className="text-center max-w-4xl px-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            <span className="block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                We Shape Your Ideas Into
                            </span>
                            <span className="block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                Awesome Digital
                            </span>
                            <span className="block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                Experience
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
                            Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
                        </p>

                        <button className="bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                            Book a call with us
                        </button>
                    </div>
                </div>

                {/* Company Logos - Bottom */}
                <div className="pb-8 mt-5 md:pb-12">
                    <CompanyLogo />
                </div>
            </div>
        </section>
    )
}

export default Banner