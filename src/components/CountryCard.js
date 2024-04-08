const ContentComponent = (props) => {
    const { name, desc, avatar } = props?.data;
    return (
      <div className="card-content">
        <div className="card">
          <img className="card-img" src={avatar} alt="Avatar" />
          <div className="name">{name}</div>
          <p className="desc">{desc}</p>
        </div>
      </div>
    );
  };

export default ContentComponent;