import room from '../images/roomsImages/Mask-Group-37.png'
import roomOne from '../images/roomsImages/Mask-Group-38.png'
import roomTwo from '../images/roomsImages/Mask-Group-39.png'
import './roomsAndApartments.css'
import Cveti from './Test';

export function RoomsAndApartments() {
    const roomsInfo = [
        { id: 0, roomNumber: "01", roomPhotoUrl: room, roomTitle: "Apartments" },
        { id: 1, roomNumber: "02", roomPhotoUrl: roomOne , roomTitle: "Studios" },
        { id: 2, roomNumber: "03", roomPhotoUrl: roomTwo, roomTitle: "Double rooms" },
    ];
    return (
        <div className="werapper-rooms-and-apartments">
            <div className="rooms-and-apartments-title">
                <p>стаи & апартаменти</p>
            </div>
            <div className="wrapper-vertical-border">
                <div className="vertical-border">
                </div>
            </div>
            <div className="wrapper-rooms">
                {roomsInfo.map((room) => <Cveti key={room.id} roomNumber={room.roomNumber} roomPhotoUrl={room.roomPhotoUrl} />)}
            </div>
        </div>
    )
};
