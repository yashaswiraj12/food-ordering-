import ItemList from "./ItemList";
import React from 'react';
import { useState } from "react";


const RestaurantCateogry=({data ,Showitems,setshowIndex})=>{
    // if we want to create a normal acardian with swiggy like featurre we just need to do make a state variable and all  the logic inside the state variable;


    const handleClick=()=>{
        setshowIndex();


    }
    console.log(data)
    return (
        <div className="w-6/12 p-3 my-4 bg-gray-50 shadow-lg  mx-auto">
            {/* cateogry section /Header of the accordian /accordian section  */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>

            <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {/* accordian body we will have here  */}
           {Showitems && <ItemList items={data?.itemCards}/>}
        </div>
    )

}
export default RestaurantCateogry;