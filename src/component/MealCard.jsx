import React from 'react'

const MealCard = (props) => {

    const{title,price,img,name}=props
  return (
    <div className='w-auto h-auto '>
 <div className='rounded-3xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-4xl text-white'>
            <h3 className='px-2 text-xl font-semibold'>{title}</h3>
            <p className='bg-orange-700 h-10 w-14 rounded-full mt-24 text-white  border-2 font-bold  text-center py-1 ml-64'>{price}</p>
             <h3 className='font-semibold px-2 text-black absolute '>{name}</h3>
        </div>

        <div>
            <img className='w-80 h-40 object-cover cursor-pointer rounded-1xl hover:scale-105' src={img} alt="" />
        </div>

        {/* <button className='text-white ml-20 absolute bottom-4 border-dashed border-2 border-white'>Add To Cart</button> */}
            

    </div>
    </div>
  )
}

export default MealCard