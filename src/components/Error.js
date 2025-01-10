import { useRouteError } from "react-router-dom";

const error = () => {
    // const error  = useRouteError();
    // console.log(error);
    return (
        <>
            <h1>OPPS!!</h1>
            <h2>Something Went Wrong</h2>
        </>
    )
}

export default Error;