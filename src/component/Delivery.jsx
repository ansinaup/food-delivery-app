import React from 'react'

function Delivery() {
  return (
    <div className='w-full py-16 px-4 bg-white'>
        <h3 className='text-orange-500 text-2xl text-center font-bold font-mono'>Quick Delivery App</h3>
         <div className='w-[1520px] mx-auto grid md:grid-cols-2'>

         <img className='w-[550px] mx-auto my-4' src='https://cdn.dribbble.com/users/8049317/screenshots/15775241/media/cefb12bcf54ea9b31fcc52cffeda408f.jpg?resize=1000x750&vertical=center'/> 

         <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Get The App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, neque quae fuga expedita ullam minus nulla consequatur illum voluptas doloribus blanditiis quam cum quis cumque inventore molestias nam alias ipsam?
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 font-mono '>Get Started</button>

         </div>



         </div>

    </div>
  )
}

export default Delivery