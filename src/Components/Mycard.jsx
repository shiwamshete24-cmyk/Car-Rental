import React from 'react'
import Card from './Card'

const Mycard = () => {
    const data = [
        {
            user: "fa-regular fa-user",
            title: "Expert Technicians",
            info: "Usage of the Internet is becoming more common due to rapid advancement of technology and power."
        },
        {
            user: "fa-regular fa-file",
            title: "Expert Technicians",
            info: "Usage of the Internet is becoming more common due to rapid advancement of technology and power."
        },
        {
            user: "fa-regular fa-tty",
            title: "Expert Technicians",
            info: "Usage of the Internet is becoming more common due to rapid advancement of technology and power."
        },
        {
            user: "fa-regular fa-gem",
            title: "Expert Technicians",
            info: "Usage of the Internet is becoming more common due to rapid advancement of technology and power."
        },
        {
            user: "fa-regular fa-cloud",
            title: "Expert Technicians",
            info: "Usage of the Internet is becoming more common due to rapid advancement of technology and power."
        },
        {
            user: "fa-regular fa-comment",
            title: "Expert Technicians",
            info: "Usage of the Internet is becoming more common due to rapid advancement of technology and power."
        }
    ]
    return (
        <div>
            <Card mydata={data} />

        </div>
    )
}

export default Mycard