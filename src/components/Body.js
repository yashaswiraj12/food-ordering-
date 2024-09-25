import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body =()=>{
    const [listofresturant,setlistresturant]=useState([]);
    const [SearchText,SetSearchText]=useState("");
    const [FilteredList ,SetFilteredList]=useState([]);
console.log(listofresturant);
    useEffect(()=>{
        fetchData();

    },[]);
    const  fetchData=async()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistresturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        SetFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    const onlineStatus=useOnlinestatus();
    if(onlineStatus===false) {
        return <h1>looks like you are offline !! check ur network connection </h1>;
    }
    const {setusername,loggedInUser}=useContext(UserContext);
    if (listofresturant.length===0) {
        return <Shimmer />; 
        
    }


    
    return(
        <div className="Body">

            <div className="filter m-4 p-4 flex ">
                <div className="search  flex">
                    <input type="text" className="search-box border rounded-sm border-black" value={SearchText} onChange={(e)=>{
                        SetSearchText(e.target.value);

                    }} />
                    <button className="py-1 px-1 font-mullish bg-green-100  text-black border-black border rounded-sm text-xl " onClick={()=>{
                        // console.log(SearchText);
                       const filterres= listofresturant.filter((res)=>{
                        const name = res?.info?.name?.toLowerCase();
                        return name.includes(SearchText.toLowerCase());

                        });
                        console.log(filterres);

                        SetFilteredList(filterres);
                    }}>Search</button>
                    
                </div>
                <button className=" mx-8 py-2 px-2 text-xl rounded-sm bg-green-100 border-black border" onClick={()=>{
                    // console.log("button clicked ");
                    const filterelist=listofresturant.filter((res)=>{
                        return res.info.avgRating>4;


                    });
                    // console.log(filterelist)
                    SetFilteredList(filterelist);
                }} >Top Rated Restaurant</button>
                <label className="font-bold text-xl p-2">UserName:</label>
                <input className="border-black border p-2 "value={loggedInUser} onChange={(e)=>setusername(e.target.value)}></input>

            </div>
            <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            <div className="grid w-full grid-cols-3 gap-4 mt-9">
                {/* resaturant cards */}
                {FilteredList.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}

            </div></div>

        </div>

    );

};


export default Body;