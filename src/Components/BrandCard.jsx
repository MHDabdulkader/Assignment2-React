
// import 
// src\assets\images\Brand1.jpg

import brand1 from '../assets/images/brand1.jpg'
import brand2 from '../assets/images/brand2.jpg'
import brand3 from '../assets/images/brand3.jpg'
import brand4 from '../assets/images/brand4.jpg'
import brand5 from '../assets/images/brand5.jpg'
function BrandCard(){
    return(
        <div className='mt-2 flex justify-around'>
            <img src={brand1}  className="w-20 h-auto" alt="Brand 1"/>
            <img src={brand2}  className="w-20 h-auto" alt="Brand 2"/>
            <img src={brand3}  className="w-20 h-auto" alt="Brand 3"/>
            <img src={brand4}  className="w-20 h-auto" alt="Brand 4"/>
            <img src={brand5}  className="w-20 h-auto" alt="Brand 5"/>
        </div>

    )
}

export default BrandCard;