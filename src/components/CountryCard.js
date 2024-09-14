const ContentComponent = (props) => {
    const { name, desc, avatar, region, flags } = props?.data;
    return (
      <div data-testid="regionCard" className="mr-3 mb-3 flex rounded-md bg-gray-900 border-dotted border-orange-600 hover:border-2 hover:cursor-pointer">
        <div className="w-80 h-80 p-3">
          <img className="h-56 w-80 rounded-2xl bg-cover" src={avatar} alt="Avatar" />
          <div className="flex mt-3"> 
          <img className="h-5 w-5 mr-2 font-bold" src= {flags?.png} alt="country flag" />
          {name?.common}
          </div>
          <div className="flex justify-between">
          <span className="text-white">{desc}</span>
          <span className="text-sm">Region: {region}</span>
          </div>
        </div>
      </div>
    );
  };

export default ContentComponent;