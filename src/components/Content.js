import data from '../utils/mockData';
import CountryCard from './CountryCard';

const Content = () => {
    return (
        <div className="container">
        {data.map((country) => (
          <CountryCard key={country.id} data={country} />
        ))}
      </div>
    )
};

export default Content;

