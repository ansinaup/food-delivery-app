import React from 'react'
import TopPicCard from './TopPicCard';

const TopPics = () => {

   const topPicks =[
  {
      id: 1,
      title:'shawarma',
      price:'$850',
      img:'https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1.jpg'
  },
  {
      id:2,
      title:'fruit juice',
      price:'$900',
      img:'https://allweeat.com/wp-content/uploads/2021/06/09-7-1335x2000.jpg'
  },
  {
      id:3,
      title:' yogurt parfait',
      price:'$450',
      img:'https://foolproofliving.com/wp-content/uploads/2017/12/Greek-Yogurt-Parfait-Recipe.jpg'
  },
  {
      id:4,
      title:'jollof rice',
      price:'$150',
      img:'https://grandbaby-cakes.com/wp-content/uploads/2023/04/jollof-rice-recipe-23.jpg'
  },
  {
      id:5,
      title:'chicken burger',
      price:'$300',
      img:'https://hips.hearstapps.com/hmg-prod/images/delish-210211-chipotle-chicken-burger-006-ab-1614179218.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*'
  },
  
  {
      id:6,
      title:'egg and plantain',
      price:'$300',
      img:'https://assets.epicurious.com/photos/5e95fb10febe90000898aff8/1:1/w_2560%2Cc_limit/PlantainBreakfast_HERO_041020_6266.jpg'
  },
  
  {
      id:7,
      title:'chinese pizza',
      price:'$500',
      img:'https://mojo.generalmills.com/api/public/content/CPNGAw3ZO0SKwkSZtycZ5w_gmi_hi_res_jpeg.jpeg?v=e8e8c700&t=466b54bb264e48b199fc8e83ef1136b4'
  },
  
  {
      id:8,
      title:'pasta salad',
      price:'$300',
      img:'https://www.skinnytaste.com/wp-content/uploads/2023/06/Italian-Pasta-Salad-7.jpg'
  },

  {
      id:9,
      title:'pasta',
      price:'$500',
      img:'https://www.goodnes.com/sites/g/files/jgfbjl321/files/styles/large/public/recipe-thumbnail/112506-52007da8aee0c1d4cdb98e2e5c9b03cd_Maggi_-_Easy_Creamy_Chicken_Pasta.jpg?itok=i7sno2rn'
  },

  {
      id:10,
      title:'santwich',
      price:'$600',
      img:'https://www.licious.in/blog/wp-content/uploads/2020/12/Grilled-Chicken-Sandwich-750x750.jpg'
  },
];
  return (
    <>
    <h1 className='text-orange-500 font-bold text-2xl text-center py-2 font-mono mb-6'>Top Pics</h1>
    <div className='flex flex-wrap gap-9 container px-14 justify-center items-center'>
     {
      topPicks.map(({title,img,price})=>{
       return(
        <TopPicCard img={img} title={title} price={price}/>
       )
      })
     }
    </div>
    </>
  )
}

export default TopPics