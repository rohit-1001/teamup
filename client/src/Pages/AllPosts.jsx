// import React from "react";
// import Post from "../components/PostComp";

// export default function AllPosts() {
//     return (
//         <div>
//             {/* <Header /> */}
//             <div className='relative items-start flex-col ml-10 mr-10'>
//                 <h1 className='pt-24 text-3xl text-blue-900 font-extrabold mb-4 underline'>Upcoming Events!</h1>

//                 <Post
//                     title={"Barclays Data-Stellar Hackathon"}
//                     date={"3 Dec 23"}
//                     size={3}
//                 />

//                 <Post
//                     title={"Machine Learning Project"}
//                     date={"3 Dec 23"}
//                     size={3}
//                 />

//                 <Post
//                     title={"Blockchain Hackathon"}
//                     date={"3 Dec 23"}
//                     size={3}
//                 />

//                 <Post
//                     title={"Cricket Match"}
//                     date={"3 Dec 23"}
//                     size={5}
//                 />

//                 <Post
//                     title={"Data Science Hackathon"}
//                     date={"3 Dec 23"}
//                     size={3}
//                 />

//                 <Post
//                     title={"Data Science Hackathon"}
//                     date={"3 Dec 23"}
//                     size={3}
//                 />

//                 <Post
//                     title={"Data Science Hackathon"}
//                     date={"3 Dec 23"}
//                     size={3}
//                 />

//             </div>

//         </div>
//     )
// }



























import React, {useEffect, useState} from "react";
import Post from "../components/PostComp";
import axios, { all } from "axios";
require('../CSS files/Somestyles.css')


export default function AllPosts(props) {
    const [posts, setPosts] = useState([]);
    
    const allposts = async () => {
        try {
            const res = await axios.get("/allposts");
            setPosts(res.data.posts);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        allposts();
    }, [])


   
    return (
        <div>
            <div className='relative items-start flex-col ml-10 mr-10'>
                <h1 className='pt-24 text-3xl text-blue-900 font-extrabold mb-4 underline'>Upcoming Events!</h1>
                {/* <div style={{
                   display: "grid",
                   gridTemplateColumns: "repeat(4, 1fr)",
                   gridGap: "50px"
                }}> */}
            {
                posts.map((post) => {
                    return(

                        <Post
                            post={{post, role:props.details.role}}
                        />
                        )
                    })
            }
                    {/* </div> */}
            </div>
        </div>
    )
}