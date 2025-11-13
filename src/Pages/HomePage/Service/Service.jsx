import React from 'react'
import titleImg from '../../../assets/Banner/Title.png'
import texture from '../../../assets/PageImages/texture.png'
import arrow from '../../../assets/Icons/Arrow Right Up.png'
import Icon1 from '../../../assets/Icons/aio.png'
import Icon2 from '../../../assets/Icons/project.png'
import Icon3 from '../../../assets/Icons/scalable.png'
import Icon4 from '../../../assets/Icons/end-to-end.png'

const Service = () => {
    return (
        <section className="relative min-h-screen  text-white overflow-hidden backdrop-blur-sm -mb-14">
            {/* Background Image */}
            <div className="absolute inset-0 blur-[1.5px]">
                <img
                    className='w-full h-full object-cover'
                    src={titleImg}
                    alt="Hero Background"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col px-6 py-16 bg-black/40 ">
                {/* Text Content */}
                <div className="max-w-5xl mx-auto mb-12">
                    <p className="text-lg md:text-xl lg:text-4xl font-normal leading-relaxed">
                        <span className="text-gray-400">
                            We are a full-service studio creating transformative{' '}
                        </span>
                        <span className="text-white font-semibold">
                            digital experiences and solutions.{' '}
                        </span>
                        <span className="text-gray-400">
                            specializing in{' '}
                        </span>
                        <span className="text-white font-semibold">
                            websites and web applications.
                        </span>
                    </p>
                </div>

                {/* Service Cards Section */}
                <div className="max-w-7xl mx-auto w-full ">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px'>
                        {/* First card - AIO */}
                        <div className="relative  h-[314px] backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
                            <div className="absolute inset-0 opacity-30">
                                <img className='w-full h-full object-cover opacity-40 bg-linear-to-tl from-red-300 via-red-300' src={texture} alt="" />
                            </div>
                            <div className="relative p-6">
                                <div className="mb-4">
                                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                        <img src={Icon1} alt="" srcSet="" />
                                    </div>
                                </div>
                                <div className='flex items-end mt-18 justify-between '>
                                    <h2 className="text-xl font-semibold">
                                        All-In-One (AIO)<br />Service
                                    </h2>
                                    <img className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity' src={arrow} alt="" />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Our AIO solution tailors to your unique vision, crafting a website that truly reflects...
                                </p>
                            </div>
                        </div>

                        {/* Second card - Project-Based */}
                        <div className="relative  h-[314px] translate-y-14 backdrop-blur-md bg-black/50 border border-white/10 border-r-0 border-l-0 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                            <div className="absolute inset-0 opacity-30">
                                <img className='w-full h-full opacity-40 bg-linear-to-tl from-blue-500 via-blue-300 object-cover' src={texture} alt="" />
                            </div>
                            <div className="relative p-6">
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                                        <img src={Icon2} alt="" srcSet="" />
                                    </div>
                                </div>
                                <div className='flex items-start  justify-between mt-20'>
                                    <h2 className="text-xl  font-semibold">
                                        Project-Based<br />Development
                                    </h2>
                                    <img className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity' src={arrow} alt="" />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Ideal for agencies with ready designs, our service focuses on bringing...
                                </p>
                            </div>
                        </div>

                        {/* Third card - Scalable Dev */}
                        <div className="relative  h-[314px] backdrop-blur-md bg-black/50 border border-white/10 border-r-0 border-l-0 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 group">
                            <div className="absolute inset-0 opacity-30">
                                <img className='w-full h-full object-cover opacity-40 bg-linear-to-tl from-blue-500 via-blue-300' src={texture} alt="" />
                            </div>
                            <div className="relative p-6">
                                <div className="mb-4">
                                    <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                                        <img src={Icon3} alt="" srcSet="" />
                                    </div>
                                </div>
                                <div className='flex items-start justify-between mt-20'>
                                    <h2 className="text-xl font-semibold">
                                        Scalable Dev<br />Partnership
                                    </h2>
                                    <img className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity' src={arrow} alt="" />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Our partnership is designed for businesses needing consistent development support...
                                </p>
                            </div>
                        </div>

                        {/* Fourth card - End-to-End */}
                        <div className="relative  h-[314px] -translate-y-14 backdrop-blur-md bg-black/50 border border-white/10 border-l-0 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group ">
                            <div className="absolute inset-0 opacity-30">
                                <img className='w-full h-full object-cover opacity-40 bg-linear-to-tl from-blue-500 via-blue-300' src={texture} alt="" />
                            </div>
                            <div className="relative p-6">
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                                        <img src={Icon4} alt="" srcSet="" />
                                    </div>
                                </div>
                                <div className='flex items-start justify-between mt-20'>
                                    <h2 className="text-xl font-semibold">
                                        End-to-End<br />Consulting
                                    </h2>
                                    <img className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity' src={arrow} alt="" />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Our partnership is designed for businesses needing consistent development support...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service