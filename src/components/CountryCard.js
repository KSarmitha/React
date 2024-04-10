const ContentComponent = (props) => {
    const { name, desc, avatar, stars } = props?.data;
    return (
      <div className="card-content">
        <div className="card">
          <img className="card-img" src={avatar} alt="Avatar" />
          <div className="name">{name}</div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span className="desc">{desc}</span>
          <span>{stars}stars</span>
          </div>
        </div>
      </div>
    );
  };

export default ContentComponent;