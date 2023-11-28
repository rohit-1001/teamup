import React from 'react'
import Image from '../assets/event1.jpg'
import UserRequest from '../components/UserRequest'
import img1 from '../assets/rohit.jpg'
import img2 from '../assets/yash.jpg'
import logo from '../assets/event1.jpg'
import { useParams } from 'react-router-dom';


const PostRequests = () => {
    const { title, description } = useParams();

    // Decode the values
    const decodedTitle = decodeURIComponent(title);
    const decodedDescription = decodeURIComponent(description);

    console.log(decodedDescription)
    console.log(decodedTitle)
    return (

        // main div
        <div className='pt-24 pl-24 pr-24'>
            <h1 className='text-3xl text-blue-900 font-extrabold mb-4 underline'>Pending Requests</h1>

            {/* first div */}
            <div className='flex flex-row'>

                {/* poster div */}

                <div className='mr-10'>
                    <img src={logo} alt="img" className='border-2 border-blue-900 p-4 rounded-xl' height={400} width={400} />
                </div>

                {/* details div */}
                <div>
                    <h1 className='text-3xl text-blue-900 font-extrabold mb-4'>{decodedTitle}</h1>
                    <div className='w-100 mb-3 text-xl text-blue-800 font-semibold'>{decodedDescription}
                    </div>

                </div>

            </div>
            {/* second div */}
            <div className='flex flex-col'>
                <UserRequest details={{name:"Yash Gajewar", img:img1}} />
                <UserRequest details={{name:"Yash Gajewar", img:img2}} />
            </div>
        </div>
    )
}

export default PostRequests