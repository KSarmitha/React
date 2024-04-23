import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    // only need to call this once, coz of that added into useEffect
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
         })
        
         window.addEventListener("offline", () => {
            setOnlineStatus(false);
         })
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;