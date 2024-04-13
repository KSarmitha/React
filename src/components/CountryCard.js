const ContentComponent = (props) => {
    const { name, desc, avatar, region, flags } = props?.data;
    return (
      <div className="card-content">
        <div className="card">
          <img className="card-img" src={avatar} alt="Avatar" />
          <div className="region-name">{name?.common} 
          <img className="flag" src= {flags.png}/>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span className="desc">{desc}</span>
          <span className="region-label">Region: {region}</span>
          </div>
        </div>
      </div>
    );
  };

export default ContentComponent;