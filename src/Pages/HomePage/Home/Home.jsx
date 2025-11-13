import React from 'react'
import Banner from '../Banner/Banner'
import ShowcaseGrid from '../../Components/ShowcaseGrid'
import Service from '../Service/Service'
import RecentWork from '../RecentWork/RecentWork'
import Feature from './Feature/Feature'


const Home = () => {
    return (
        <div className='w-full'>
            <Banner />
            <ShowcaseGrid />
            <Service />
            <RecentWork />
            <Feature />
        </div>
    )
}

export default Home