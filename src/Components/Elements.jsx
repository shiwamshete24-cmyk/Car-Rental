import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Myhero2.css'

const Elements = () => {
    return (
        <div>
            <div className='container-fluid Myhero2'>
                <div className='row justify-content-center align-items-center hero2-box-height'>
                    <div className='col-12 text-center text-white   '>
                        <div className='my-1 hero2-font'>Elements</div>
                        <div>
                            <span><Link to="/home" className='mx-2 hero2-a-font'>Home</Link></span>
                            <span><i className="fa-solid fa-arrow-right mx-2"></i></span>
                            <span><Link to="/elements" className='mx-2 hero2-a-font'>Elements</Link></span>
                        </div>
                    </div>
                </div>

            </div>
            <section className='container my-5'>

                <div className='row'>
                    <div className='col-12 font-footer my-4'>Text Sample</div>
                    <div className='col-12 font1-section3 mb-5'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laborum fuga est quae, consequatur facere ab minima dolore cupiditate labore officia quibusdam sed nulla cum reiciendis dicta asperiores provident quis culpa. Quod facere mollitia suscipit libero, ad laudantium, illum vel eligendi commodi dolorem eum recusandae provident. Facilis dicta quo beatae error deleniti at quis. Eum eveniet quidem ea nemo harum velit aut enim numquam, ex eos assumenda deleniti necessitatibus iure dolorem cupiditate exercitationem dignissimos ad libero saepe! Explicabo libero temporibus magni! Officia voluptates perferendis, ullam quia doloremque eius, tempora, doloribus earum repellat blanditiis sequi similique. Vero, laboriosam quaerat. Harum numquam corrupti veniam. Deserunt error non quisquam accusantium architecto facere eius aliquam fugiat, ullam animi sapiente quaerat quidem nisi aspernatur? Nesciunt distinctio quaerat voluptatibus tempore mollitia, laboriosam consectetur maiores dolorum quam beatae delectus totam. Saepe atque, suscipit maiores sit blanditiis eligendi. Eius unde velit molestiae corporis quam voluptas architecto laudantium quas, praesentium eum quos beatae assumenda. Totam, ex debitis? Est reprehenderit commodi, neque at totam deserunt. Commodi alias, est modi unde rerum .</p>
                    </div>
                    <div className='col-12'>
                        <div class="card mb-3 border-0">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="src/assets/d.jpg" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Left Aligned</h5>
                                        <p class="card-text font1-section3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veritatis ad sequi eius facilis a nihil suscipit enim expedita hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi alias, dicta maxime ab doloremque modi dolorem id ipsam! Modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at alias qui atque quibusdam ut nulla in sint quis pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis dignissimos, voluptate et adipisci dolorum esse? Nihil quisquam rem alias?</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 my-5'>
                        <div class="card mb-3 border-0 ">
                            <div class="row g-0">

                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Right Aligned</h5>
                                        <p class="card-text font1-section3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veritatis ad sequi eius facilis a nihil suscipit enim expedita hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi alias, dicta maxime ab doloremque modi dolorem id ipsam! Modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at alias qui atque quibusdam ut nulla in sint quis pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis dignissimos, voluptate et adipisci dolorum esse? Nihil quisquam rem alias?</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img src="src/assets/d.jpg" class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section className='container my-5'>

                <div className='row justify-content-center align-items-center g-2'>
                    <div className='col-12 font-footer'>Image Gallery</div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <img src="src/assets/g1.jpg" alt="" className='img-fluid height-galary' />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <img src="src/assets/g2.jpg" alt="" className='img-fluid height-galary ' />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <img src="src/assets/g3.jpg" alt="" className='img-fluid height-galary' />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 '>
                        <img src="src/assets/g4.jpg" alt="" className='img-fluid height-galary' />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <img src="src/assets/g5.jpg" alt="" className='img-fluid height-galary' />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <img src="src/assets/g6.jpg" alt="" className='img-fluid height-galary' />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <img src="src/assets/g7.jpg" alt="" className='img-fluid height-galary' />
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <img src="src/assets/g8.jpg" alt="" className='img-fluid height-galary' />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Elements