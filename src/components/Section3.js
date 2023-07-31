import React from 'react';
import Image1 from './images/Stars.png';
import Image2 from './images/Ellipse 1985.png';
import Image3 from './images/Vector.png';

export default function Section3() {
    return (
        <div className="section3">
            <div className="section3-container wrapper">
                <div className="section3-top d-flex flex-column align-items-center">
                    <sub>#women tell women</sub>
                    <h2 className="text-center mt-4">Real people, real results</h2>
                </div>
                <div className="container mt-4">
                    <div className="row gap-5 px-md-0 px-4">
                        <div className="col-lg section3-middle-divs section3-middle-div1 p-4">
                            <img src={Image1} alt="" className="mb-3" />
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                                nisi id enim pulvinar suscipit. Praesent pretium orci non velit
                                bibendum,
                            </p>
                            <h6 className="text-secondary fw-bolder">~ Anna Smith</h6>
                            <img
                                src={Image2}
                                alt=""
                                className="elipse1"
                            />
                            <img src={Image3} alt="" className="vector" />
                        </div>
                        <div className="col-lg section3-middle-divs section3-middle-div2 p-4">
                            <img src={Image1} alt="" className="mb-3" />
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                                nisi id enim pulvinar suscipit. Praesent pretium orci non velit
                                bibendum,
                            </p>
                            <h6 className="text-secondary fw-bolder">~ Anna Smith</h6>
                            <img
                                src={Image2}
                                alt=""
                                className="elipse2"
                            />
                            <img src={Image3} alt="" className="vector" />
                        </div>
                        <div className="col-lg section3-middle-divs section3-middle-div3 p-4">
                            <img src={Image1} alt="" className="mb-3" />
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                                nisi id enim pulvinar suscipit. Praesent pretium orci non velit
                                bibendum,
                            </p>
                            <h6 className="text-secondary fw-bolder">~ Anna Smith</h6>
                            <img
                                src={Image2}
                                alt=""
                                className="elipse1"
                            />
                            <img src={Image3} alt="" className="vector" />
                        </div>
                    </div>
                    <div className="row gap-5 px-md-0 px-4">
                        <div className="offset-lg-2 col-lg-4 section3-middle-divs section3-middle-div4 p-4">
                            <img src={Image1} alt="" className="mb-3" />
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                                nisi id enim pulvinar suscipit. Praesent pretium orci non velit
                                bibendum,
                            </p>
                            <h6 className="text-secondary fw-bolder">~ Anna Smith</h6>
                            <img
                                src={Image2}
                                alt=""
                                className="elipse1"
                            />
                            <img src={Image3} alt="" className="vector" />
                        </div>
                        <div className="col-lg-4 section3-middle-divs section3-middle-div5 p-4">
                            <img src={Image1} alt="" className="mb-3" />
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                                nisi id enim pulvinar suscipit. Praesent pretium orci non velit
                                bibendum,
                            </p>
                            <h6 className="text-secondary fw-bolder">~ Anna Smith</h6>
                            <img
                                src={Image2}
                                alt=""
                                className="elipse3"
                            />
                            <img src={Image3} alt="" className="vector" />
                        </div>
                    </div>
                </div>
                <div className="section3-bottom p-5">
                    <h2>
                        Join the safe space of <br />
                        community!
                    </h2>
                    <button className="btn button-shadow mt-4">Join today - it’s free</button>
                </div>
            </div>
        </div>
    )
}
