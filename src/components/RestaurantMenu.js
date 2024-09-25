import Shimmer from "./Shimmer";
// import React from 'react';

import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from  "../utils/useRestaurantMenu";
import RestaurantCateogry from "./RestaurantCateogry";




const RestaurantMenu=()=>{
// const [resInfo,setresInfo]=useState(null);
const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);
const [showIndex,setshowIndex]=useState(null);

if(resInfo===null) return <Shimmer/>
// console.log(resInfo);
// console.log(resInfo);
const {name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

// const cateogry=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories;
const itemcard=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
// console.log(itemcard);
const categories=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>
    c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
// console.log(categories);



    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl font-mullish my-6">{name}</h1>
            <p className="font-bold text-lg ">{cuisines.join(",")}-{costForTwoMessage}</p>
            {/* cateogry accordians  */}
            {categories.map((cateogry,index)=>(<RestaurantCateogry 
            Showitems={index===showIndex?true:false}
            setshowIndex={()=>setshowIndex(index)}
            key={index}
            data={cateogry?.card?.card}/>))}

           
         
            {/* <p>{itemcard}</p> */}
            
            
            
        </div>
    )
};
export default  RestaurantMenu; 
