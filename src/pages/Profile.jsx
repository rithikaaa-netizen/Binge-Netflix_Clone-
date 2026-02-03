import React from 'react'
import person1 from '../assets/person1.jpg'
import kids from '../assets/kids.jpg'
import add from '../assets/add.png'
import { Link } from 'react-router-dom'
const ProfileCard=({name,image}) =>{
        return(
            <div className='flex flex-col items-center cursor-pointer group'>
                <img 
                    src={image} 
                    alt='Person1' 
                    className="w-40 h-40 rounded-lg border-2 border-transparent group-hover:border-white group-hover:scale-110 transition duration-200"
                    >
                </img>
                <p className="mt-3 text-neutral-400 group-hover:text-white">{name}</p>
            </div>
        )
    }
const Profile = () => {
  return (
    <div className='bg-neutral-900 min-h-screen w-full flex flex-col items-center'>
        <h1 className=' text-white mt-32 mb-16 font-semibold text-5xl '>Who's watching?</h1>
        <div className='flex gap-12'>
            <nav>
                <Link to="/home"> 
                    <ProfileCard
                        name="Person1"
                        image={person1}
                    />
                </Link>
            </nav>
            <nav>
                <Link to="/children">
                    <ProfileCard
                        name="Children"
                        image={kids}
                    />
                </Link>
            </nav>
            <ProfileCard
                name='Add Profile'
                image={add}
            />
        </div>               
    </div>
  )
}

export default Profile