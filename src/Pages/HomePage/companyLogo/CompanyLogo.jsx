import company1 from '../../../assets/Banner/fixmyphone.png'
import company2 from '../../../assets/Banner/Verdant.png'
import company3 from '../../../assets/Banner/client-04.png'
import company4 from '../../../assets/Banner/apex.png'
import company5 from '../../../assets/Banner/lindholms.png'

const CompanyLogo = () => {
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:justify-between'>
                    <div className='opacity-70 hover:opacity-100 transition-opacity duration-300'>
                        <img src={company1} alt="Fix My Phone" className='h-6 md:h-8 w-auto object-contain' />
                    </div>

                    <div className='opacity-70 hover:opacity-100 transition-opacity duration-300'>
                        <img src={company2} alt="Verdant" className='h-6 md:h-8 w-auto object-contain' />
                    </div>

                    <div className='opacity-70 hover:opacity-100 transition-opacity duration-300'>
                        <img src={company3} alt="Duet" className='h-6 md:h-8 w-auto object-contain' />
                    </div>

                    <div className='opacity-70 hover:opacity-100 transition-opacity duration-300'>
                        <img src={company4} alt="Apex" className='h-6 md:h-8 w-auto object-contain' />
                    </div>

                    <div className='opacity-70 hover:opacity-100 transition-opacity duration-300'>
                        <img src={company5} alt="Lindholms" className='h-6 md:h-8 w-auto object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyLogo