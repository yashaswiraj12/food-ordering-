import { CDN_URL } from "../utils/constants";
const RestaurantCard =(props)=>{
  const { resData } = props;
  // console.log(resData);
    
    

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="w-[300px] h-[500px]  border border-black rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        
        className="res-logo rounded-sm p-4 h-[200px] w-[300px]"
        alt="res-logo"
        src={
            CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-mullish text-xl font-bold p-2">{name}</h3>
      
      <h4 className="p-2">{cuisines.join(", ")}</h4>
      <h4 className="p-2">{avgRating} stars</h4>
      <h4 className="p-2">{costForTwo}</h4>
      <h4 className="p-2">{sla?.deliveryTime} minutes</h4>
    </div>
  );

};

export default RestaurantCard;