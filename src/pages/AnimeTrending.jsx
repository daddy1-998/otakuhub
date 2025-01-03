import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";

function AnimeTrending() {
  const animes = [
    {
      id: 1,
      title: "eminence in shadow",
      image: "https://m.media-amazon.com/images/M/MV5BMDFmMWJlMWYtMDFkNi00OWViLTkzOGEtNDI0YWNmM2M5MzI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: "4",
      watch: "https://sites.google.com/view/aniversestudio/trending-animes",
      download: "https://sites.google.com/view/aniversestudio/trending-animes"
    }
  ]

  return (
    <>





        <menu className='w-full  calcHeight flex items-center  justify-center flex-wrap gap-[20px] p-t-[20px] '>



          {animes.map((anime, index) => {

            const { title, image, type, rating, watch, download } = anime;
            return (

              <div key={index} className='font-Poppins uppercase text-white w-[350px] h-[500px] bg-red-500 flex flex-col items-center gap-[15px] rounded-[10px] overflow-hidden'>
                <div className='w-full h-[350px] '>
                  <img className='w-full h-full object-cover center ' src={image} alt={title} />
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                  <h1 className=' font-bold  tracking-[5px]'>{title}</h1>
                  <p className='flex items-center gap-4'>
                  {Array.from({ length: rating }, (_, index) => (
                    <FaStar key={index} className="text-yellow-500"  />
                  
                  ))}
                  </p>
                 
                </div>
                <div className='p-[2%] w-full flex items-center justify-evenly gap-[20px] flex-row'>

                  <a href={download} target="_blank" className='bg-primary text-white  font-bold flex items-center gap-3 '><IoMdDownload/> Download</a>
                  <a href={watch} target="_blank" className='bg-primary text-white  font-bold flex items-center gap-3 '><BiMoviePlay/> Watch</a>

                </div>
              </div>
            )
          })}

        </menu>


    </>
  )
}

export default AnimeTrending