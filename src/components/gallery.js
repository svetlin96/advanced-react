import React from "react";
import './gallery.css';
import Img1 from "../images/galleryImages/lounge-area-in-hotel-lobby-2021-08-29-09-04-27-utc.webp"
import Img2 from '../images/galleryImages/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.png';
import Img3 from '../images/galleryImages/Mask Group 32.png';
import Img4 from '../images/galleryImages/Mask-Group-33.webp';
import Img5 from '../images/galleryImages/Mask Group 34.png';
import Img6 from '../images/galleryImages/Bali-Restaurant-Merah-Putih-Leggett-1-1140x691.png';
import Img7 from '../images/galleryImages/bowl-japanese-seafood-ramen.png';
import Img8 from '../images/galleryImages/Mask Group 36.png';
import Img9 from '../images/galleryImages/type-luxurious-summer-villa-hotel-amara-dolce-vita-luxury-hotel-beautiful-architecture-tekirova-kemer-turkey.png';
import Img10 from '../images/galleryImages/view-decoration-chairs-terrace-house.png';
import Img11 from '../images/galleryImages/beautiful-umbrella-chair-around-swimming-pool-hotel-resort.png';


const Gallery = () => {

    let data =[
        {
            
            className: 'Img1',
            width :'60%',
            imgSrc: Img1,
            
        },
        {
            width :'30%',
            imgSrc: Img2,
        },
        {
            width :'30%',
            imgSrc: Img3,
        },
        {
            width :'30%',
            imgSrc: Img4,
        },
        {
            width :'30%',
            imgSrc: Img5,
        },
        {
            width :'30%',
            imgSrc: Img6,
        },
        {
            width :'30%',
            imgSrc: Img7,
        },
        {
            width :'30%',
            imgSrc: Img8,
        },
        {
            width :'30%',
            imgSrc: Img9,
        },
        {
            width :'30%',
            imgSrc: Img10,
        },
        {
            width :'30%',
            imgSrc: Img11,
        }
    ]

    return(
        <>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index}>
                        <img src={item.imgSrc} width={item.width} />
                    </div>
                )
            


            })}
        

        </div>
        </>
    )

}
export default Gallery