import { useState } from 'react';
import data from '../utils/mockData';
import Accordion from './Accordion';

const Contact = () => {

    const [isExpanded, setIsExpanded] = useState(null);

    return (
        <div className="flex items-center flex-col">
            <div className='text-lg uppercase font-bold text-gray-400 p-3'>Contact us to Plan your trip 🚀🚀</div>
                {
                    data.map((item, index) => (
                        <Accordion key={item.id} data={item} isExpandedVal={isExpanded === index} setExpandedVal= { () => setIsExpanded(index)} />
                    ))
                }
        </div>
    );
};

export default Contact;