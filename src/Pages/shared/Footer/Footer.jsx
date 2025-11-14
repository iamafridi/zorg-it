import React from 'react'

const Footer = () => {
    return (
        <footer className=" bg-linear-to-l from-[#1e1e1e] via-white/5 to-black text-white py-12 px-6 relative overflow-hidden">
            <div className="absolute z-0">
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '0%', backgroundColor: '#330000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '10%', backgroundColor: '#000000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '20%', backgroundColor: '#330000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '30%', backgroundColor: '#000000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '40%', backgroundColor: '#330000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '50%', backgroundColor: '#000000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '60%', backgroundColor: '#330000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '70%', backgroundColor: '#000000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '80%', backgroundColor: '#330000' }} />
                <div className="absolute top-0 bottom-0 w-8 opacity-30" style={{ left: '90%', backgroundColor: '#000000' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                        <p className="text-lg text-white/90 mb-2">Have a project in mind?</p>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-[#04b0ee] via-white to-[#02abe9] bg-clip-text text-transparent">
                            Let's Talk
                        </h2>
                    </div>

                    <div className="space-y-2 text-right">
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors underline">LinkedIn</a>
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors underline">GitHub</a>
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors underline">Facebook</a>
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors underline">Instagram</a>
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors underline">Twitter</a>
                    </div>
                </div>

                <div className="lg:flex justify-between items-center text-md">
                    <a href="mailto:hey@pixll.com" className="text-[20px] md:text-5xl font-normal underline underline-offset-14 hover:text-cyan-400 transition-colors duration-300">
                        hey@pixll.com
                    </a>

                    <div className="flex mt-3 items-center text-xs lg:text-[18px] gap-8 text-white/60">
                        <div className='flex gap-8'>
                            <div className='gap-8 mr-10 flex'>
                                <a href="#" className="hover:text-white transition-colors underline">Privacy</a>
                                <a href="#" className="hover:text-white transition-colors underline">Terms</a>
                            </div>
                            <div>
                                <span>© 2017 – 2025 Pixll</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer