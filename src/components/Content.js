import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { countryUrl, unplashAccesskey, unplashAvatarUrl } from '../utils/constants';
import CardLoader from './CardLoader';
import ContentComponent from './CountryCard';
import IndependentCountryCard from './IndependentCountryCard';
import UserContext from "./UserContext";

const Content = () => {
  const [countryList, setCountryList] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const IndependentComponent = IndependentCountryCard(ContentComponent);
  const { name } = useContext(UserContext);

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
  return countryList.length === 0 ? <CardLoader /> : (
    <div className="flex flex-col items-center mt-3">
      <div className="text-xl m-3 font-bold">Hi 👋 , I'm {name}. This is my Pet project with React</div>
      <div className="flex">
        <input className="border border-black rounded-md mr-2 p-2 text-sm text-black" type="text" placeholder="Search by country name.." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className="rounded-md border border-orange-950 p-1 bg-orange-800 text-white w-24"
         onClick={
          () => {
            const filteredCountry = countryList.filter((country) =>
              country?.name?.common.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredCountryList(filteredCountry);
          }}>Search</button>
      </div>
      
      <button className="rounded-md border border-orange-950 p-1 bg-orange-700 text-white w-auto my-2"
      onClick={
        () => {
          const filteredCountry = countryList.filter((country) => country.region == 'Asia');
          setFilteredCountryList(filteredCountry);
        }
      }>
        Filter by Asia Region Country
      </button>

      <button className="rounded-md border border-orange-950 p-1 bg-orange-400 text-white w-24"
      onClick={() => {
        setFilteredCountryList(countryList);
        setSearchText('');
      }}>
        Reset
      </button>

      <div className="flex flex-wrap p-5 items-center justify-center">
        {
          filteredCountryList.map((country) => (
            <Link key={country?.tld[0]} to={"/country/"+ country?.name?.common}>
             { country.independent ? <IndependentComponent data={country} /> : <ContentComponent data={country} />}
            </Link>
          ))
        }
      </div>
    </div>
  )
};

export default Content;

