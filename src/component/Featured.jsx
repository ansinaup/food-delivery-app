
import React, {useState} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx'

 const Featured = () => {

    const sliders=[
        {
          url: 'https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.jpg?s=612x612&w=0&k=20&c=k6X_gSHlo-WdKsqTnfBjoEbjdhrlz6RNhUs23ivpIxk='

        },
        {
          url: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          url:'https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=1380&t=st=1700205705~exp=1700206305~hmac=401f59452357c63debb7bfcc56edca8353f5e9f9280785a4813621d60f3b8e1b'
        },
    ]

  const[currentIndex, setCurrentIndex] =useState(0)
  console.log(currentIndex);


  const prevSlider=()=>{
    const isFirstSlide = currentIndex === 0
    const newIndex=isFirstSlide? sliders.length-1 :  currentIndex-1
    setCurrentIndex(newIndex)
  }

  const nextSlider=()=>{
    const isLastSlide=currentIndex===sliders.length -1
    const newIndex= isLastSlide ? 0 : currentIndex +1 
    setCurrentIndex(newIndex)

  }

  const moveToNextSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex)
  }

 

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
      style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
      
      ></div>
      <div className=' hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-point '>
        <BsChevronCompactLeft onClick={prevSlider}/>
         </div>


      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-point '>
        <BsChevronCompactRight onClick={nextSlider}/>
         </div>

      <div
       className='flex top-4 justify-center py-2'>
        {
          sliders.map((sliderItems, slideIndex)=>(
            <div 
            key={slideIndex}
            onClick={()=>moveToNextSlide (slideIndex)}
            
            className='text-2xl cursor-pointer'>
              <RxDotFilled/>
               </div>

          ))
        }

      </div>
    
    
    </div>

   
  )
}

export default Featured
