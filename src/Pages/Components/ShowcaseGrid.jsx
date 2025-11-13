import React, { useState } from 'react';
import image1 from '../../assets/PageImages/portfolio.png'
import image2 from '../../assets/PageImages/leading.jpg'
import image3 from '../../assets/PageImages/dashboard.jpg'

const ShowcaseGrid = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { src: image1, alt: 'portfolio' },
        { src: image2, alt: 'leading' },
        { src: image3, alt: 'dashboard' }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative bg-gradient-to-br from-black via-red-950 to-black py-20 -mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="lg:hidden px-4">
                <div className="relative">
                    <div className="overflow-hidden rounded-xl">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="min-w-full">
                                    <img
                                        className="rounded-xl w-full h-auto"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                    {index === 1 && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/10 via-blue-300/80 to-blue-300/10 blur-3xl scale-110 -z-10"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className='hidden lg:flex gap-10 justify-between items-center px-2'>
                <div className="card w-full shadow-sm">
                    <figure>
                        <img className='rounded-xl'
                            src={images[0].src}
                            alt={images[0].alt} />
                    </figure>
                </div>

                <div className="card w-full shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/10 via-blue-300/80 to-blue-300/10 blur-3xl scale-110 z-10"></div>
                    <figure>
                        <img className='rounded-xl z-20 relative'
                            src={images[1].src}
                            alt={images[1].alt} />
                    </figure>
                </div>

                <div className="card w-full shadow-sm">
                    <figure>
                        <img className='rounded-xl'
                            src={images[2].src}
                            alt={images[2].alt} />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseGrid;