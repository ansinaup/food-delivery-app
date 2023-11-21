import React from 'react'
import MealCard from './MealCard';

const Meal = () => {

    const mealData=[
        {
            id:5,
            name:'cheeseless pizza',
            catogary:'pizza',
            image:'https://www.godairyfree.org/wp-content/uploads/2011/07/Cheese-less-Pizza-in-a-Box-feature.jpg',
            price:'$200'
        },
    
        {
            id:6,
            name:'supreme pizza',
            catogary:'pizza',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bCKl8dNtq2nhJHupNf1RFyfC9zt5OiFQkdYhKHKlNDYq6_HukFeHog9SUVvARbFdYzY&usqp=CAU',
            price:'$300'
        },
        {
            id:7,
            name:'pepparoni',
            catogary:'pizza',
            image:'https://townsquare.media/site/959/files/2020/08/GettyImages-1133727757.jpg?w=980&q=75',
            price:'$400',
        },
        {
            id:8,
            name:'african salad',
            catogary:'salad',
            image:'https://assets.unileversolutions.com/recipes-v2/213999.jpg',
            price:'$150',
        },
        {
            id:9,
            name:'kale salad',
            catogary:'salad',
            image:'https://www.gimmesomeoven.com/wp-content/uploads/2014/01/Kale-Cranberry-Salad-1.jpg',
            price:'$200',
        },
        {
            id:10,
            name:'ceaser salad',
            catagory:'salad',
            image:'https://www.twopeasandtheirpod.com/wp-content/uploads/2023/04/Caesar-Salad-24.jpg',
            price:'$300'
        },
        {
            id:11,
            name:'Loaded salad',
            catagory:'salad',
            image:'https://greenhealthycooking.com/wp-content/uploads/2021/07/Chopped-Salad.jpg',
            price:'$300'
    
        },
        {
            id:12,
            name:'wings',
            catagory:'chicken',
            image:'https://spicecravings.com/wp-content/uploads/2020/12/Tandoori-Chicken-Wings-featured-1.jpg',
            price:'$300'
        },
        {
            id:13,
            name:'chicken shawarma',
            catagory:'chicken',
            image:'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/chicken-shawarma-recipe.jpg',
            price:'$300'
        },
        {
            id:14,
            name:'chicken tikka',
            catagory:'chicken',
            image:'https://www.kitchenathoskins.com/wp-content/uploads/2023/07/chicken-tikka-13.jpg',
            price:'$300'
        },
        {
            id:15,
            name:'chicken tenders',
            catagory:'chicken',
            image:'https://aubreyskitchen.com/wp-content/uploads/2021/03/frozen-chicken-tenders-air-fryer-500x500.jpg',
            price:'$300'
        
        }];

  return (
    <>
    <h1 className='text-orange-500 font-bold text-2xl text-center py-2 font-mono mt-6 mb-6'>Our Meals</h1>
    <div className='flex flex-wrap gap-4  px-14 justify-center items-center'>
     {
      mealData.map(({title,image,price})=>{
       return(
        <MealCard img={image} title={title} price={price}/>
       )
      })
     }
    </div>
    </>
  )
}

export default Meal