import React from 'react';
import './about.css';
import aboutImage from '../../../public/assets/images/about.jpg';
import Image from 'next/image';
export default function About() {
    return (
        <section id="about" className="about" >
            <div className ="container" data-aos="fade-up" >
                <div className="row">
                    <div
                        className="col-lg-6 order-1 order-lg-2"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div className="about-img" >
                            <Image src={aboutImage} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>
                            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                        </h3>
                        <p className="fst-italic" >
                            Lorem ipsum dolor sit anet, consectetur adipiscing elit, sed do 
                        </p>
                        <ul>
                            <li>
                                <i className="bi bi-check-circle"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam odio eum laudantium maiores tempore enim consectetur fugit similique corporis.
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo quibusdam fugiat, suscipit ducimus soluta vel unde et recusandae vitae iusto vero dolore corporis obcaecati numquam nesciunt hic. Ad, exercitationem.

                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, numquam accusantium rem consequatur quia deleniti quae iusto sapiente temporibus nobis dolor modi, repudiandae animi ullam hic obcaecati, eveniet iure voluptate!

                            </li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, itaque voluptatibus voluptatem, vero quisquam, molestiae excepturi consequuntur rerum quos error laborum non unde earum! Unde ea reiciendis error minima consequuntur laudantium, hic voluptatem deserunt deleniti eius doloribus quis vel fugiat saepe maxime illum dignissimos laborum? Reiciendis in ea mollitia optio.

                        </p>
                    </div >
                </div>
            </div>
        </section>
    )
}