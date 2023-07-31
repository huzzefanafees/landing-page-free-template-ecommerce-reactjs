import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image1 from './images/charity 1.svg';
import Image2 from './images/eco-friendly 1.svg';
import Image3 from './images/atom (1) 1.svg';
import Image4 from './images/pill 1.svg';
import Image5 from './images/Rectangle 24509.jpg';

export default function Section2() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabsData = [
        {
            title: 'Supplement Series',
            description: 'Your daily routine',
        },
        {
            title: 'Must haves',
            description: 'Essential for holistic health',
        },
        {
            title: 'Bundles & Kits',
            description: 'Packages for daily needs',
        },
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="section2">
            <div className="section2-container wrapper">
                <div className="section2-top d-flex flex-column align-items-center gap-4">
                    <sub>#designed for everybody</sub>
                    <h2 className="text-center">Discover your skin's perfect match.</h2>
                    <div className="section2-top-tabs d-flex gap-4 mt-5">
                        {tabsData.map((tab, index) => (
                            <div
                                key={index}
                                className={`section2-tabs ${activeTab === index ? 'active' : ''}`}
                                onClick={() => handleTabClick(index)}
                            >
                                <h3 className="text-center">{tab.title}</h3>
                                <p className="text-center text-secondary">{tab.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Carousel responsive={responsive} className='my-4'>
                    <div>
                        <div className="card card1">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h2 className="card-title text-white fw-bolder fs-1">
                                    Find the <br />
                                    perfect fit for <br />
                                    you
                                </h2>
                                <button className="btn button-shadow">Take quiz</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div class="card">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="card-top pt-3">
                                    <h4 class="card-title fw-bolder">Multivitamin 18+</h4>
                                    <p class="card-text text-secondary">
                                        Personalized prescription skin care
                                    </p>
                                </div>
                                <div class="card-middle d-flex justify-content-center">
                                    <img src={Image5} alt="Rectangle" />
                                </div>
                                <div class="button-card d-flex justify-content-center">
                                    <button class="btn button-shadow">Add to cart - $12</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="card-top pt-3">
                                    <h4 class="card-title fw-bolder">Multivitamin 18+</h4>
                                    <p class="card-text text-secondary">
                                        Personalized prescription skin care
                                    </p>
                                </div>
                                <div class="card-middle d-flex justify-content-center">
                                    <img src={Image5} alt="Rectangle" />
                                </div>
                                <div class="button-card d-flex justify-content-center">
                                    <button class="btn button-shadow">Add to cart - $12</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="card-top pt-3">
                                    <h4 class="card-title fw-bolder">Multivitamin 18+</h4>
                                    <p class="card-text text-secondary">
                                        Personalized prescription skin care
                                    </p>
                                </div>
                                <div class="card-middle d-flex justify-content-center">
                                    <img src={Image5} alt="Rectangle" />
                                </div>
                                <div class="button-card d-flex justify-content-center">
                                    <button class="btn button-shadow">Add to cart - $12</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <div className="section2-bottom">
                    <h2 className="text-center mt-5 py-5">
                        Treat yourself, because you deserve it.
                    </h2>
                    <div className="section2-bottom-divs d-flex flex-md-row flex-column mx-md-0 mx-4 gap-3">
                        <div className="section2-bottom-div d-flex py-5 pe-4 gap-3 bg-white">
                            <img src={Image1} alt="" />
                            <p>
                                <b>Crafted with care</b> to support your unique health needs.
                            </p>
                        </div>
                        <div className="section2-bottom-div d-flex py-5 px-4 gap-3 bg-white">
                            <img src={Image2} alt="" />
                            <p>
                                <b>100% vegan</b> and <b>cruelty-free</b> supplements for a healthier
                                you
                            </p>
                        </div>
                        <div className="section2-bottom-div d-flex py-5 px-4 gap-3 bg-white">
                            <img src={Image3} alt="" />
                            <p>
                                <b>Science-backed</b> supplements for optimal health and wellness.
                            </p>
                        </div>
                        <div className="section2-bottom-div d-flex py-5 px-4 gap-3 bg-white">
                            <img src={Image4} alt="" />
                            <p>
                                <b>Experience the difference</b> with our next-level supplements
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
