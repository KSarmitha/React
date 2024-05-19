import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCountryDetails from '../utils/useCountryDetails';
import CountryLoader from './CountryLoader';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [ expandAcc, setExpandAcc] = useState(false);

    const countryDetails = useCountryDetails(countryName);

    const handleClick = () => {
        setExpandAcc(!expandAcc);
    }

    if (countryDetails === null)
        return <CountryLoader />;

    const { name, capital, altSpellings , continents, flags, population, subregion, borders} = countryDetails;

    return (
        <div className='flex items-center justify-center flex-col my-5'>
            <div>
            <img src={flags.png} alt={flags.alt} />
            <h2 className='text-lg mt-2'>{name?.common}</h2>
            <p>Capital: {capital.join(', ')}</p>
            <p>Continents: {continents.join(', ')}</p>
            <p>Population: {population}</p>
            <p>Sub Region: {subregion}</p>
            </div>
            
            <div className='mt-5'>
                <div className='border w-[600px] border-gray-400 bg-slate-300 text-black p-2 rounded-md mb-3'>
                    <div className='flex justify-between cursor-pointer' onClick={ () => {
                        handleClick();
                    }}>
                        <div className='font-bold'>Borders 🛂</div>
                        <div>⬇️</div>
                    </div>

                    <div className = { `${expandAcc ? 'block': 'hidden'} border-t-2 border-gray-800 mt-1` }>
                       { borders?.map((border, index) => (
                            <span key={index} className='flex text-sm py-1'>{border}</span>
                       ))} 
                    </div>
                </div>

                <div className='border w-[600px] border-gray-400 bg-slate-300 text-black p-2 rounded-md'>
                    <div className='flex justify-between cursor-pointer' onClick={ () => {
                        setExpandAcc(!expandAcc);
                    }}>
                        <div className='font-bold'>Alternate Spellings 🗣️</div>
                        <div>⬇️</div>
                    </div>

                    <div className= {`${expandAcc ? 'block' : 'hidden'} border-t-2 border-gray-800 mt-1`}>
                       { altSpellings.map((spell, index) => (
                            <span key={index} className='flex text-sm py-1'>{spell}</span>
                       ))} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;