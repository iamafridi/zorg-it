import React from 'react'
import titleImg from '../../../assets/Banner/Title.png'
import arrow from '../../../assets/Icons/Arrow Right Up.png'
import image1 from '../../../assets/PageImages/statistics.png'
import image2 from '../../../assets/PageImages/rely.png'
import image3 from '../../../assets/PageImages/data.png'
import image4 from '../../../assets/PageImages/banking.png'
import image5 from '../../../assets/PageImages/innovation.png'

const RecentWork = () => {
    return (
        <section className="min-h-screen bg-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-20 relative">

                {/* Centered Background Title */}
                <div className="absolute top-0 left-0 right-0 flex justify-center items-start pt-12 pointer-events-none">
                    <img
                        src={titleImg}
                        alt="Background Title"
                        className="max-w-[800px] w-full h-auto object-contain opacity-30"
                    />
                </div>

                {/* Text Content */}
                <div className="mx-auto mb-16 text-center relative pt-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                        Our Most Recent Works
                    </h2>
                    <p className="text-white/60 max-w-md mx-auto">
                        Discover our latest creative and technical projects — from design to development.
                    </p>
                </div>

                {/* Top Grid - 2 Big Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 relative z-20">
                    {/* Card 1 */}
                    <div className="relative lg:col-span-2 h-[550px] rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-lg hover:border-cyan-500/50 transition-all duration-500 group">
                        <img
                            src={image1}
                            alt="Alcohol Tracker"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
                            <h2 className="text-2xl font-semibold mb-1">Alcohol Tracker</h2>
                            <p className="text-white/60 mb-3 text-sm">All-In-One (AIO) Service</p>

                            <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm">Open</span>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative lg:col-span-2 h-[550px] rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-lg hover:border-purple-500/50 transition-all duration-500 group">
                        <img
                            src={image2}
                            alt="Rely Project"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
                            <h2 className="text-2xl font-semibold mb-1">Rely</h2>
                            <p className="text-white/60 mb-3 text-sm">All-In-One (AIO) Service</p>

                            <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm">Open</span>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row - 3 Cards */}
                <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 relative z-20">
                    {/* Card 3 */}
                    <div className="relative flex-1 h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-md hover:border-pink-500/50 transition-all duration-500 group">
                        <img
                            src={image3}
                            alt="Alcohol Tracker"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                            <h2 className="text-xl font-semibold mb-1">Alcohol Tracker</h2>
                            <p className="text-white/60 mb-3 text-sm">All-In-One (AIO) Service</p>

                            <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm">Open</span>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative flex-1 h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-md hover:border-blue-500/50 transition-all duration-500 group">
                        <img
                            src={image4}
                            alt="Finance Website"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                            <h2 className="text-xl font-semibold mb-1">Finance Website</h2>
                            <p className="text-white/60 mb-3 text-sm">All-In-One (AIO) Service</p>

                            <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm">Open</span>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="relative flex-1 h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500 group">
                        <img
                            src={image5}
                            alt="Innovative Travel"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                            <h2 className="text-xl font-semibold mb-1">Innovative Travel</h2>
                            <p className="text-white/60 mb-3 text-sm">All-In-One (AIO) Service</p>

                            <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm">Open</span>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* View More Button */}
                <div className="mt-12 flex justify-center">
                    <button className="px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                        View more
                        <img
                            src={arrow}
                            alt="arrow"
                            className="w-4 h-4"
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RecentWork