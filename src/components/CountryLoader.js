const CountryLoader = () => {
    const styleObj = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20px'
    }
    return (
        <div style={styleObj}>
            <div className="bar-loader"></div>
            <div className="bar-loader"></div>
            <div className="bar-loader"></div>
            <div className="bar-loader"></div>
            <div className="bar-loader"></div>
            <div className="bar-loader"></div>
            <div className="bar-loader"></div>
        </div>
    )
}

export default CountryLoader;