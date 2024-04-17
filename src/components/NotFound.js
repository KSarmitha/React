import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="center-content">
            <h1>Oops!! Something went wrong!</h1>
            <h3>{err?.status} - {err?.statusText}</h3>
            <p>{err?.data}</p>
        </div>
    );
};

export default NotFound;
