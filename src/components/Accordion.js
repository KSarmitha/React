const Accordion = ({ data, isExpandedVal, setExpandedVal }) => {

    const handleClick = () => {
        setExpandedVal();
    }

    return (
        <div className='border w-[600px] border-gray-400 bg-slate-300 text-black p-2 rounded-md mb-2'
            onClick={ () => {
                handleClick();
            }}>
            <div className='flex justify-between cursor-pointer'>
                <div className='font-bold'> {data.name} </div>
                <div>⬇️</div>
            </div>

            { isExpandedVal &&
            <div className="border-t-2 border-gray-800 mt-1">
                <span className='flex text-sm py-1'>{data.desc}</span> 
                <span className='flex text-sm py-1'>{data.stars} stars</span> 
            </div>
            }
        </div>
    )
}

export default Accordion;