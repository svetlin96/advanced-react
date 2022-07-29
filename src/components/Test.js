function Cveti(roomsInfo) {
    console.log(roomsInfo)
    const { roomNumber, roomPhotoUrl, roomTitle } = roomsInfo
    return (
            <a href="#">
                <div className="rooms">
                    <div className="room-number">
                        <p>{roomNumber}
                        <span className="room-number-border"></span>
                        </p>
                        <img src={roomPhotoUrl} alt="hotels-rooms" />
                    </div>
                </div>
            </a>
    )
}
export default Cveti;
