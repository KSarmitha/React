const HotelReservation = () => {
    return (
        <>
            <div>Hotel Reservation related components here!! It may have more components...</div>
            <form>
                <input type="text"className="p-3 border" placeholder="Enter your email"/>
                <input type="password"className="p-3 border" placeholder="password"/>

                <textarea className="p-3 border" placeholder="Message"></textarea>
                <button className="rounded-lg bg-purple-500" type="submit"> Submit </button>
            </form>
        </>
    )
}

export default HotelReservation;