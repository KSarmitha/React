import { useEffect, useState } from 'react';
import { countryDetailsUrl } from './constants';

const useCountryDetails = (countryName) => {
    const [countryDetails, setCountryDetails] = useState(null);
    
    useEffect(() => {
        getCountryDetails();
    }, []);

    const getCountryDetails = async () => {
        try {
            const data = await fetch(countryDetailsUrl + countryName);
            const jsonData = await data.json();
            setCountryDetails(jsonData[0]);
        }
        catch (error) {
            console.error(error);
        }
    }
    return countryDetails;
}

export default useCountryDetails;