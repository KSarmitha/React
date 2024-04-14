import { useEffect, useState } from "react";
import { countryUrl, unplashAccesskey, unplashAvatarUrl } from '../utils/constants';
import CountryCard from './CountryCard';
import ContentLoader from './loadingContent';

const Content = () => {
  const [countryList, setCountryList] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getCountryList();
  }, [])

  const getCountryList = async () => {
    const countryList = await fetch(countryUrl);
    const countryData = await countryList.json();

    if (countryData?.length > 0) {
      let data = [];
      for (let country of countryData.slice(0, 25)) {
        const countryPlaces = await fetch(unplashAvatarUrl + country?.name?.common + "&client_id=" + unplashAccesskey);
        const placeAvatars = await countryPlaces.json();
        data.push({ ...country, avatar: placeAvatars.results[0].urls.raw });
      }
      setCountryList(data);
      setFilteredCountryList(data);
    }
  }

  // Conditional Rendering
  return countryList.length === 0 ? <ContentLoader /> : (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
        <input type="text" placeholder="Search by country name.." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={
          () => {
            const filteredCountry = countryList.filter((country) =>
              country?.name?.common.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredCountryList(filteredCountry);
          }}>Search</button>
      </div>
      
      <button onClick={
        () => {
          const filteredCountry = countryList.filter((country) => country.region == 'Asia');
          setFilteredCountryList(filteredCountry);
        }
      }>
        Filter by Asia Region Country
      </button>

      <button onClick={() => {
        setFilteredCountryList(countryList);
        setSearchText('');
      }}>
        Reset
      </button>

      <div className="container">
        {
          filteredCountryList.map((country) => (
            <CountryCard key={country?.tld[0]} data={country} />
          ))
        }
      </div>
    </div>
  )
};

export default Content;

