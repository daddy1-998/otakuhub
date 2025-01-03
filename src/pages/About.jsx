import React from 'react'
import avatar from "../assets/background.png"

function About() {
  return (
    <section className='w-4/5 h-auto md:h-screen   flex flex-col items-center justify-center md:flex-row md:justify-evenly gap-[20px] text-white font-Poppins uppercase'>
      <article className='w-full md:w-2/4 flex flex-col items-start gap-[30px]'>
        <h1 className='text-[3em]'>About  
         </h1>
         <h1 className='font-NIRVANA text-[5em] md:text-[6em] text-bold tracking-[5px] uppercase '>Otaku<span className='text-primary '>Hub</span> </h1>
        <p>
          Welcome to OtakuHub, your ultimate destination for everything anime and manga! Whether you're a long-time fan or just starting your journey, we provide the latest updates, reviews, and recommendations to fuel your anime passion.

          At OtakuHub, we aim to create a vibrant community where anime lovers of all backgrounds can connect, share, and enjoy their favorite shows. We offer detailed reviews, trending anime lists, and in-depth discussions on the latest releases.

          Join us in celebrating the world of anime, explore new titles, and be part of a growing community of otaku enthusiasts!
        </p>
      </article>
      <div className= 'w-full md:w-2/4 flex items-center justify-center invert'>
        <img className='w-[350px] h-[350px] object-cover' src={avatar} alt={avatar} />
      </div>
    </section>
  )
}

export default About