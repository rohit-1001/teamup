import React from 'react'
import Image from '../assets/event1.jpg'
import UserRequest from '../components/UserRequest'

const PostRequests = (props) => {
    return (
        // main div

        <div className='pt-24 pl-24 pr-24'>
            <h1 className='text-3xl text-blue-900 font-extrabold mb-4 underline'>Pending Requests</h1>

            {/* first div */}
            <div className='flex flex-row'>

                {/* poster div */}

                <div className='mr-10'>
                    <img src={props.details.logo} alt="img" className='border-2 border-blue-900 p-4 rounded-xl' height={400} width={400} />
                </div>

                {/* details div */}
                <div>
                    <h1 className='text-3xl text-blue-900 font-extrabold mb-4'>{props.details.title}</h1>
                    <div className='w-100 mb-3 text-xl text-blue-800 font-semibold'>{props.details.description}
                    </div>

                </div>

            </div>
            {/* second div */}
            <div className='flex flex-col'>
                <UserRequest title={"Yash Gajewar"} />
                <UserRequest title={"Yash Gajewar"} />
                <UserRequest title={"Yash Gajewar"} />
                <UserRequest title={"Yash Gajewar"} />
                <UserRequest title={"Yash Gajewar"} />
            </div>
        </div>
    )
}

export default PostRequests