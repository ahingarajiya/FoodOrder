import React, { useEffect, useState } from 'react'
import SingleMeal from './SingleMeal';
// app.get('/meals')

export default function Meals() {

 const [loadmeal, setLoadmeal] = useState([])

    
useEffect(()=>{
    const featchmeans = async ()=>{
        const response =  await fetch("http://localhost:3000/meals")
        const result = await response.json();
        setLoadmeal(result)
    }

    featchmeans( )
},[]);

  return (
   <>
   <ul id='meals'>
    { loadmeal.map((singleMeal) => (
        <SingleMeal data={singleMeal} key={singleMeal.id}/>
    ))}
    
   </ul>
   </>
  )
}
