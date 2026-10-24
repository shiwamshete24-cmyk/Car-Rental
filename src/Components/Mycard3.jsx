import React from 'react'
import Card3 from './Card3'
import img1 from '../assets/b1.jpg'
import img2 from '../assets/b2.jpg'
import img3 from '../assets/b3.jpg'

const Mycard3 = () => {
    const data = [
        {
            image : img1,
            title: "Cody Hines",
            info: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        },
        {
            image : img2,
            title: "Chad Herrera",
            info: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        },
        {
            image : img3,
            title: "Andre Gonzalez",
            info: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        },
    ]
    return (
        <div>
        <Card3 mydata={data}/>

        </div>
    )
}

export default Mycard3