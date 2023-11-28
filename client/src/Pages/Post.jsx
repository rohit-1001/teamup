import React from 'react'
import Image from '../assets/event1.jpg'
import JoinButton from '../components/JoinButton'
import ListItem from '../components/ListItem'


const Post = () => {
    return (
        // main div
        <div className='pt-24 pl-24 pr-24'>
            {/* first div */}
            <div className='flex flex-row'>

                {/* poster div */}

                <div className='mr-10'>
                    <img src={Image} alt="img" className='border-4 border-blue-900 p-4 rounded-xl' height={400} width={400} />
                </div>

                {/* details div */}
                <div>
                    <h1 className='text-3xl text-blue-900 font-extrabold mb-4'>Barclays Data-Stellar Hackathon</h1>
                    <div className='w-100 mb-3 text-xl text-blue-800 font-semibold'>Barclays has organized Data-Stellar hackathon for domains - Blockchain, Machine Learning and WebDevelopment.
                        Looking for enthusiastic team members willing to collaborate and win this hackathon.
                    </div>
                    <JoinButton />
                </div>

            </div>
            {/* second div */}
            <div className='flex flex-col'>
                <div className='text-xl text-white font-semibold mb-3 mt-5 p-2 rounded-xl bg-blue-800 w-1/3 text-center hover:bg-blue-600 shadow'>
                    Scheduled On 3 Dec 23  | Members Required 3
                </div>
                <div className='text-3xl text-blue-900 font-bold'>
                    Description
                </div>
                <div className='text-l font-semibold mb-4 pt-4 pb-4 rounded-lg'>
                    <ol className="space-y-5">
                        <ListItem count={1} text="Barclays has organized Barclays Data-Stellar Hackathon on 3rd December 2023" />
                        <ListItem count={2} text="Looking for enthusiastic, collaborative and hardworking team willing to put efforts and give 100%" />
                        <ListItem count={3} text="Looking for team with intermediate knowledge in MERN stack, blockchain and AI" />
                        <ListItem count={4} text="There are many variations of passages" />
                        <ListItem count={5} text="If you are going to use a of Lorem" />
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Post



























































// import React from 'react'
// import Image from '../assets/event1.jpg'
// import JoinButton from '../components/JoinButton'
// import ListItem from '../components/ListItem'


// const Post = (props) => {
//     return (
//         // main div
//         <div className='pt-24 pl-24 pr-24'>
//             {/* first div */}
//             <div className='flex flex-row'>

//                 {/* poster div */}

//                 <div className='mr-10'>
//                     <img src={props.details.post.logo} alt="img" className='border-4 border-blue-900 p-4 rounded-xl' height={400} width={400} />
//                 </div>

//                 {/* details div */}
//                 <div>
//                     <h1 className='text-3xl text-blue-900 font-extrabold mb-4'>{props.details.post.title}</h1>
//                     <div className='w-100 mb-3 text-xl text-blue-800 font-semibold'>{props.details.post.description}
//                     </div>
//                     <JoinButton />
//                 </div>

//             </div>
//             {/* second div */}
//             <div className='flex flex-col'>
//                 <div className='text-xl text-white font-semibold mb-3 mt-5 p-2 rounded-xl bg-blue-800 w-1/3 text-center hover:bg-blue-600 shadow'>
//                     Scheduled On {props.details.post.date}  | Members Required {props.details.post.teamsize}
//                 </div>
//                 <div className='text-3xl text-blue-900 font-bold'>
//                     {props.details.post.details}
//                 </div>
//                 {/* <div className='text-l font-semibold mb-4 pt-4 pb-4 rounded-lg'>
//                     <ol className="space-y-5">
//                         <ListItem count={1} text="Barclays has organized Barclays Data-Stellar Hackathon on 3rd December 2023" />
//                         <ListItem count={2} text="Looking for enthusiastic, collaborative and hardworking team willing to put efforts and give 100%" />
//                         <ListItem count={3} text="Looking for team with intermediate knowledge in MERN stack, blockchain and AI" />
//                         <ListItem count={4} text="There are many variations of passages" />
//                         <ListItem count={5} text="If you are going to use a of Lorem" />
//                     </ol>
//                 </div> */}
//             </div>
//         </div>
//     )
// }

// export default Post