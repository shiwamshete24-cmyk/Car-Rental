import React from 'react'
import '../Components/Cards.css'
const Card3 = ({ mydata }) => {
    return (
        <div className='container bg-color1 mycard-padding1 '>
            <div className='row justify-content-center align-items-center g-0'>
                <div className='col-12 col-md-8 col-lg-8'>
                    <h2 className='mt-4 mb-1  text-center font'>Latest From Our Blog</h2>
                    <p className='mb-5 text-center font2'>WLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
                <div className='col-12 col-md-12 col-lg-12'>
                    <div className='row justify-content-center align-items-center'>
                        {
                            mydata.map((item, index) => {
                                return (
                                    <div className='col-12 col-md-4 col-md-4 card3-width my-3' key={index}>
                                        <div className='px-2 py-4 rounded-3  bg-color2'>
                                            <div className='overflow-hidden'> <img src={item.image} alt="" className='img-fluid card3-img-top' /></div>
                                            <div className='my-4'><span className='py-1 px-2 bg-dark text-white text-center my-2'>10 jan 2018</span></div>
                                            <h5 className='mt-3 mb-3 font1'>{item.title}</h5>
                                            <p className='mb-3 font2'>{item.info}</p>
                                            <div className='d-flex justify-content-between align-items-center my-2 font2'>
                                                <span><i class="fa-regular fa-heart"></i>15 Likes</span>
                                                <span><i class="fa-regular fa-comment"></i>20 Comments</span>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Card3