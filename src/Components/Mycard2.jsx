import React from 'react'
import Card2 from './Card2'

const Mycard2 = () => {

    const data = [
        {
            user : "fa-regular fa-star",
            title : "Cody Hines",
            info : "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        },
        {
            user : "fa-regular fa-star",
            title : "Chad Herrera",
            info : "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        },
        {
            user : "fa-regular fa-star",
            title : "Andre Gonzalez",
            info : "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        },
        {
            user : "fa-regular fa-star",
            title : "Jon Banks",
            info : "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        },
        {
            user : "fa-regular fa-star",
            title : "Landon Houston",
            info : "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        },
        {
            user : "fa-regular fa-star",
            title : "Nelle Wade",
            info : "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker."
        }
    ]
  return (
    <div>
        <Card2 mydata={data}/>

    </div>
  )
}

export default Mycard2