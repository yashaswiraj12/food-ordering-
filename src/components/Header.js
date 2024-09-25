import { LOGO_URL } from "../utils/constants";
import { useState ,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  
  const [btnname, setbtnname] = useState("login");
  const onlineStatus=useOnlinestatus();
  const {loggedInUser}=useContext(UserContext);



  



    return (
      <div className="bg-white">
      <div className="flex relative h-[200px] w-[1080px] justify-between items-center mx-auto">
        <div className="logo-container flex">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="h-full">
        <ul className="flex h-full items-center  space-x-6">
          <li className="text-black font-mullish font-bold text-2xl hover:text-blue-800 cursor-pointer transition-all duration-200 relative group">Online:{onlineStatus?"✅":"❌"}
          </li>
          <li className="text-black font-mullish text-2xl font-bold hover:text-blue-800 cursor-pointer transition-all duration-200 relative group"><Link to="/">Home</Link></li>
          <li className="text-black font-mullish text-2xl font-bold hover:text-blue-800 cursor-pointer transition-all duration-200 relative group"><Link to="/about">About</Link></li>
          <li className="text-black font-mullish text-2xl font-bold hover:text-blue-800 cursor-pointer transition-all duration-200 relative group"><Link to="/contact">Contact</Link></li>
          <li className="text-black font-mullish text-2xl font-bold hover:text-blue-800 cursor-pointer transition-all duration-200 relative group"><Link to="/grocery">Grocery</Link></li>

          <li className="text-black font-mullish text-2xl font-bold hover:text-blue-800 cursor-pointer transition-all duration-200 relative group">Cart</li>
          <button  className="py-3 px-3 font-mullish text-black border-lightBlue border rounded-sm text-2xl font-bold" onClick={()=>{
            // console.log("login button clicked");
            btnname==="login"?
            setbtnname("logout"):setbtnname("login");
            // console.log(btnname);
          }}>{btnname}</button>
          <li className="text-black font-mullish text-xl font-bold hover:text-blue-800 cursor-pointer transition-all duration-200 relative group">{loggedInUser}</li>

        </ul>
      </div>
       
      </div></div>
    );
};
export default Header;  