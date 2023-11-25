import React from 'react'
import Image from '../assets/event1.jpg'
import JoinButton from '../components/JoinButton'


const Post = () => {
    return (
        // main div
        <div className='m-10 p-10'>
            {/* first div */}
            <div className='flex flex-row'>

                {/* poster div */}

                <div className='mr-10'>
                    <img src={Image} alt="img" style={{width:"350",
                        height:"350"}}/>
                </div>

                {/* details div */}
                <div>
                <h1 className='text-3xl font-semibold mb-5'>Barclays Data-Stellar Hackathon</h1>
                <div className='w-50 mb-5'>Barclays has organized Data-Stellar hackathon for domains - Blockchain, Machine Learning and WebDevelopment.
                    Looking for enthusiastic team members willing to collaborate and win this hackathon.
                </div>
                <JoinButton/>
                </div>

            </div>
            {/* second div */}
            <div className='flex flex-col'>
                <div className='text-xl font-semibold mb-5 mt-5'>
                Scheduled On 3 Dec 23  | Members Required 3
                </div>
                <div className='text-xl font-semibold underline mb-5'>
                    Description
                </div>
                <div className='text-l font-semibold mb-4'>
                    <ul className='text-l mb-2 ml-2'>
                    <li>Hello ! My Name is Rohit. I am a 3rd year B.Tech. student at Sardar Patel Institute of Techonology</li>
                    <li>I am familiar with MERN stack, machine learning and blockchain</li>
                    <li>Barclays has organized Data-Stellar hackathon for domains - Blockchain, Machine Learning and WebDevelopment.</li>
                    <li>Looking for enthusiastic team members willing to collaborate and win this hackathon.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Post