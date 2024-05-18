import { useContext, useState } from "react";
import data from "../utils/mockData";
import Accordion from "./Accordion";
import UserContext from "./UserContext";

const Contact = () => {
  const [isExpanded, setIsExpanded] = useState(null);
  const { name, setUsername } = useContext(UserContext);

  return (
    <div className="flex items-center flex-col">
      <div className="text-lg uppercase font-bold text-gray-400 p-3">
        Contact {name} &nbsp;
        or 
        <input
          className="rounded-sm p-1 m-2"
          type="text"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />
        to Plan your trip 🚀🚀
      </div>
      {data.map((item, index) => (
        <Accordion
          key={item.id}
          data={item}
          isExpandedVal={isExpanded === index}
          setExpandedVal={() => setIsExpanded(index)}
        />
      ))}
    </div>
  );
};

export default Contact;
