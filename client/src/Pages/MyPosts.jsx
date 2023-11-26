import React from "react";
import UserPost from "../components/UserPost";

const MyPosts = () => {
  return (
    <div>
    {/* <Header /> */}
    <div className='relative items-start flex-col ml-10 mr-10'>
        <h1 className='pt-24 text-3xl text-blue-900 font-extrabold mb-4 underline'>My Posts</h1>

        <UserPost
            title={"Barclays Data-Stellar Hackathon"}
        />

        <UserPost
            title={"Machine Learning Project"}
        />

        <UserPost
            title={"Blockchain Hackathon"}
        />

        <UserPost
            title={"Cricket Match"}
        />

        <UserPost
            title={"Data Science Hackathon"}
        />

    </div>

</div>
  )
}

export default MyPosts