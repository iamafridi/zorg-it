import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
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

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start gap-10">
                <div>
                    <p className="text-sm text-white/60 mb-2">Have a project in mind?</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Let’s Talk</h2>
                    <a href="mailto:hey@pixll.com" className="text-2xl md:text-3xl font-bold underline hover:text-cyan-400 transition-colors duration-300">
                        hey@pixll.com
                    </a>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between w-full md:w-auto gap-8">
                    <div className="space-y-2">
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">LinkedIn</a>
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">GitHub</a>
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">Facebook</a>
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">Instagram</a>
                        <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">Twitter</a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs text-white/60">
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                        <span>© 2017 – 2025 Pixll</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer