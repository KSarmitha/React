import { useState } from "react";
import data from '../utils/mockData';
import CountryCard from './CountryCard';

const Content = () => {
  // State Variable
  const [countryList, setCountryList] = useState(data);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <button onClick = {
            () => {
              const filteredCountry = countryList.filter((country) => country.stars > 4);
              setCountryList(filteredCountry);
            }
          }>
            Filter by stars
          </button>

          <button onClick = { () => {
            setCountryList(data);
          }}>Reset</button>

          <div className="container">
            {countryList.map((country) => (
              <CountryCard key={country.id} data={country} />
            ))}
          </div>
      </div>
    )
};

export default Content;

