import { useEffect,useState } from "react";

const RestaurantMenu=(resId)=>{
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const  fetchMenu=async()=>{
       const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
       const json=await data.json();
    //    console.log(json);
       setresInfo(json?.data);
    //    console.log(resInfo)
       
       
    };


    return resInfo;
}
export default  RestaurantMenu;
