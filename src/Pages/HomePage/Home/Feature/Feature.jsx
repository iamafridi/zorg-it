import React from 'react'
import titleImg from '../../../../assets/Banner/Title.png'
import arrow from '../../../../assets/Icons/Arrow Right Up.png'

const Feature = () => {
    return (
        <section className="min-h-screen bg-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-20 relative">

                {/* Centered Background Title */}
                <div className="absolute top-0 left-0 right-0 flex justify-center items-start pt-12 pointer-events-none">
                    <img
                        src={titleImg}
                        alt="Background Title"
                        className="max-w-[800px] w-full h-auto object-contain opacity-80"
                    />
                </div>

                {/* Text Content */}
                <div className="mx-auto mb-16 text-center relative pt-8 ">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                        Featured Insights
                    </h2>
                    <p className="text-white/60 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet <br /> consectetur. Eget at at nunc lorem.
                    </p>
                </div>
                {/* faq */}
                <div className="space-y-4 mt-30 text-[24px]">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-linear-to-r from-blue-600  to-black bg-clip-text text-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400  ">01</span>
                            <span className="text-white font-medium">How to Protect Your Identity While Traveling</span>
                        </div>

                        <img
                            src={arrow}
                            alt="arrow"
                            className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400  text-[24px]">02</span>
                            <span className="text-white font-medium">How to Protect Your Identity While Traveling</span>
                        </div>
                        <img
                            src={arrow}
                            alt="arrow"
                            className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400  text-[24px]">03</span>
                            <span className="text-white font-medium">How to Protect Your Identity While Traveling</span>
                        </div>
                        <img
                            src={arrow}
                            alt="arrow"
                            className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400  text-[24px]">04</span>
                            <span className="text-white font-medium">How to Protect Your Identity While Traveling</span>
                        </div>
                        <img
                            src={arrow}
                            alt="arrow"
                            className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400  text-[24px]">05</span>
                            <span className="text-white font-medium">How to Protect Your Identity While Traveling</span>
                        </div>
                        <img
                            src={arrow}
                            alt="arrow"
                            className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        />
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

export default Feature