import { useParams } from 'react-router-dom';
import useCountryDetails from '../utils/useCountryDetails';
import CountryLoader from './CountryLoader';

const CountryDetails = () => {
    const { countryName } = useParams();
    const countryDetails = useCountryDetails(countryName);

    if (countryDetails === null)
        return <CountryLoader />;

    const { name, capital, altSpellings , continents, flags, population, subregion} = countryDetails;

    return (
        <div className='center-content'>
            <img src={flags.png} alt={flags.alt} />
            <h2>{name?.common}</h2>
            <p>Capital: {capital.join(', ')}</p>
            <p>Alternate Spellings: {altSpellings.join(', ')}</p>
            <p>Continents: {continents.join(', ')}</p>
            <p>Population: {population}</p>
            <p>Sub Region: {subregion}</p>
        </div>
    )
}

export default CountryDetails;