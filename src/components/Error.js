import { useRouteError } from "react-router-dom";
const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div className="error">
            <h1>Opps!!! Something went wrong </h1>
        </div>
    );
}
export default Error;
