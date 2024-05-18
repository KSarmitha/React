//High Order Component

export const IndependentCountryCard = (Component) => {
    return (props) => {
        return (
            <>
                <div className="absolute m-5 w-auto rounded-md text-sm font-bold p-1 border bg-slate-50 text-blue-600">
                    Independent
                </div>
                <Component data={props.data}/>
            </>
        )
    }
}

export default IndependentCountryCard;