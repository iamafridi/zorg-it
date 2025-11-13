import image1 from '../../assets/PageImages/portfolio.png'
import image2 from '../../assets/PageImages/leading.jpg'
import image3 from '../../assets/PageImages/dashboard.jpg'

const ShowcaseGrid = () => {
    return (
        <div className="relative bg-linear-to-br from-black via-red-950 to-black py-20">
            {/* Left dark gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>

            {/* Right dark gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className='flex gap-10 justify-between items-center px-2'>
                {/* First one  */}
                <div className="card w-full shadow-sm">
                    <figure>
                        <img className='rounded-xl'
                            src={image1}
                            alt="portfolio" />
                    </figure>
                </div>

                {/* second one */}
                <div className="card w-full shadow-sm">
                    {/* Bright glow effect behind */}
                    <div className="absolute inset-0 bg-linear-to-r from-blue-300/10 via-blue-300/80 to-blue-300/10 blur-3xl scale-110 z-10"></div>
                    <figure>
                        <img className='rounded-xl z-99'
                            src={image2}
                            alt="leading" />
                    </figure>
                </div>

                {/* third one */}
                <div className="card w-full shadow-sm">
                    <figure>
                        <img className='rounded-xl'
                            src={image3}
                            alt="dashboard" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseGrid