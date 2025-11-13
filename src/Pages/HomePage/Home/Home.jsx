import React from 'react'
import Banner from '../Banner/Banner'
import ShowcaseGrid from '../../Components/ShowcaseGrid'
import Service from '../Service/Service'

const Home = () => {
    return (
        <div className='w-full'>
            <Banner />
            <ShowcaseGrid />
            <Service />
        </div>
    )
}

export default Home