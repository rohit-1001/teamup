import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import HomeComponent2 from '../components/HomeComponent2'
import HomeCard from '../components/HomeCard'
import Footer from '../components/Footer'


const Home = () => {
  const data=[
    {
        title:"Ganesh Sharma",
        subheader:"January 10, 2023",
        image:1,
        description:"Sure, I'm happy to share my experience. Our team has been using the application for a few months now, and we've been very impressed with it. It's been a great way to help us build relationships, improve communication, and boost morale."
    },
    {
        title:"Parnika Jadhav",
        subheader:"August 9, 2023",
        image:2,
        description:"I was initially impressed with the variety of team-building activities that the application offers. There are activities for all types of teams, from small and intimate groups to large and diverse teams."
    },
    {
        title:"Stephen Lara",
        subheader:"September 21, 2023",
        image:3,
        description:"I was initially hesitant to try out a team building application, but I'm so glad I did. The application made it easy to find and organize team-building activities that were perfect for our team. We had a lot of fun and learned a lot about each other."
    }
]
  return (
    <div>
      <HomeCarousel />
      <HomeComponent2 />
      <div>
        <div id="heading111">Testimonials</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '20px 40px 50px 40px'
        }}
      >
        <HomeCard data={data[0]}/>
        <HomeCard data={data[1]}/>
        <HomeCard data={data[2]}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
