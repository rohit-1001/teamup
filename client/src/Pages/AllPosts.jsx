import React from "react";
import Post from "../components/PostComp";

export default function AllPosts() {
    return (
        <div>
            {/* <Header /> */}
<<<<<<< HEAD
            <div className='relative items-start flex-col ml-10 mr-10 mt-10'>
                <h1 className='text-3xl text-blue-900 font-extrabold mb-4 underline'>Upcoming Events!</h1>
=======
            <div className='relative items-start flex-col ml-10 mr-10'>
                <h1 className='text-3xl font-semibold underline mb-5'>Upcoming Events!</h1>
>>>>>>> 3e5aafd800b330caf9a569f7d021f3dac8e27bf5
                <Post
                    title={"Barclays Data-Stellar Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Machine Learning Project"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Blockchain Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Cricket Match"}
                    date={"3 Dec 23"}
                    size={5}
                />

                <Post
                    title={"Data Science Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Data Science Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Data Science Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

            </div>

        </div>
    )
}