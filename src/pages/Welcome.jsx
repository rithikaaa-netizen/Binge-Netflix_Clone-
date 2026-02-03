import React from 'react'
import unlimited from '../assets/unlimited.webp'
import Header from '../components/Header'
import NumberedRow from '../components/NumberedRow'
import requests from '../requests'
import Footer from '../components/Footer'
const Card=({heading,body})=>{
    return (
      <div className='relative w-75 h-95 rounded-2xl p-6 flex flex-col justify-between bg-linear-to-b from-indigo-950 via-purple-950 to-black'>
        <div>
          <h2 className='text-white text-2xl font-bold'>
            {heading}
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    )
  }
const Questions=({question})=>{
  return(
    <div className='px-6 py-6 w-full transition bg-neutral-800  hover:bg-neutral-700'>
      <h2 className='text-2xl text-white'>{question}</h2>
    </div>
  )
}

const Welcome = () => {
  return (
    <>
      <div className='relative w-full h-screen'>
        <img 
          className="absolute inset-0 w-full h-full object-cover " 
          src={unlimited} alt='unlimited'>
        </img>
        <div className="absolute bottom-0 left-0 w-full h-56 bg-linear-to-t from-black via-black/75 to-transparent rounded-t-[0%] "/>
        <div className='absolute inset-0 bg-black/70'>
          <div className='relative z-10'>
            <Header/>
          <div className='flex flex-col items-center justify-center text-white text-center h-[calc(100vh-5rem)] px-4'>
            <h1 className='text-6xl text-center font-extrabold leading-tight'>
              Unlimited movies,
            </h1>
            <h1 className='text-6xl text-center font-extrabold leading-tight'>
              shows,and more
            </h1>
            <br></br>
            <p className='text-center'>
              Start at ₹149. Cancel at any time.
            </p>
            <br></br>
            <button 
              className='bg-[#E50914] text-white w-80 h-14 text-center rounded-md  font-bold text-2xl'>
                Restart Your Membership
            </button>
          </div>
          <div className='bg-black px-20'>
            <NumberedRow
              title="Trending Now"
              fetchUrl={requests.fetchTrending}
            />
          </div>
          <div className="bg-black text-white px-26 ">
            <h2 className="text-3xl font-bold mb-10">
              More reasons to join
            </h2>
              <div className="flex gap-6">
                <Card
                  heading="Enjoy on your TV"
                  body="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                />
                <Card
                  heading="Download your shows to watch offline"
                  body="Save your favourites easily and always have something to watch."
                />
                <Card
                  heading="Watch everywhere"
                  body="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                />
                <Card
                  heading="Create profiles for kids"
                  body="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
                />
              </div>
            </div>
          </div>
          <div className="bg-black text-white px-26 ">
            <h2 className="text-3xl font-bold mb-10">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              <Questions question="What is Netflix?" />
              <Questions question="How much does Netflix cost?" />
              <Questions question="Where can I watch?" />
              <Questions question="How do I cancel?" />
              <Questions question="Is Netflix good for kids?" />
            </div>
          </div>
          <div className='px-26 bg-black'>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome