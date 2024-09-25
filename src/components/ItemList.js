import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-2  m-2 border-gray-300 border-b-2 flex text-left justify-between">
         
          <div className="w-9/12">
          
            <div className="flex flex-col items-start ">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <span>₹{(item?.card?.info?.price / 100) || (item?.card?.info?.defaultPrice / 100) }</span>
            <span>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}</span>
            <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            
           
            
          </div>
          <div className="w-3/12 relative">
          <img src={CDN_URL+item?.card?.info?.imageId} className="w-full"></img>
          <button className="p-2 rounded-lg bg-gray-200 absolute bottom-0 font-mullish">Add +</button>
          </div>
         
         
        </div>
      ))}
    </div>
  );
};
export default ItemList;
