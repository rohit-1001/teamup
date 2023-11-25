import React from 'react'
import MyRequest from '../components/MyRequest'

const MyRequestsPage = () => {
    return (
        // main div

        <div className='pt-24 pl-24 pr-24'>
            {/* second div */}
            <div className='flex flex-col'>
                <MyRequest title={"Barclays-Stellar Hackathon"} status={"Rejected"}/>
                <MyRequest title={"Data Science Hackathon"}status={"Accepted"} />
                <MyRequest title={"Blockchain Project"}  status={"Pending"}/>
            </div>
        </div>
    )
}

export default MyRequestsPage