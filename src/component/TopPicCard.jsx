import React from 'react'

const TopPicCard = (props) => {

    const{title,price,img}=props
  return (
    <div className='w-fit h-auto '>
 <div className='rounded-3xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
            <h3 className='px-2 text-xl font-semibold'>{title}</h3>
            <p className='px-2 text-xl font-semibold'>{price}</p>
        </div>

        <div>
            <img className='w-64 h-60 object-cover cursor-pointer rounded-3xl hover:scale-105' src={img} alt="" />
        </div>

        <button className='text-white ml-20 absolute bottom-4 border-dashed border-2 border-white'>Add To Cart</button>
            

    </div>
    </div>
  )
}

export default TopPicCard