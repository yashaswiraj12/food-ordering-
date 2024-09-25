import { useEffect ,useState} from "react";


const useOnlinestatus=()=>{
    const  [onlineStatus, setOnlineStatus] = useState(true);


    // check if online 
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        });
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
        });

    },[]);

    // boolean value 
    return onlineStatus;
}
export default useOnlinestatus;