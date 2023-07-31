import React from 'react';
import Image1 from './images/Vector.svg';
import Image2 from './images/commas.svg';
import Image3 from './images/tabler-icon-clock.svg';

export default function Section4() {
    return (
        <div className="section4">
            <div className="section4-container wrapper">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide mb-5 pointer-event"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className=""
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                            className=""
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                            className="active"
                            aria-current="true"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item" data-bs-interval={10000}>
                            <div className="container bg-transparent slider-cards py-5">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center">
                                        <div className="d-flex align-items-baseline gap-3">
                                            <img src={Image1} alt="" />
                                            <p className="text-black fs-3">says</p>
                                        </div>
                                        <img src={Image2} alt="" />
                                        <p className="fs-5 w-50 text-center mt-4">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={20000}>
                            <div className="container bg-transparent slider-cards py-5">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center">
                                        <div className="d-flex align-items-baseline gap-3">
                                            <img src={Image1} alt="" />
                                            <p className="text-black fs-3">says</p>
                                        </div>
                                        <img src={Image2} alt="" />
                                        <p className="fs-5 w-50 text-center mt-4">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active" data-bs-interval={30000}>
                            <div className="container bg-transparent slider-cards py-5">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center">
                                        <div className="d-flex align-items-baseline gap-3">
                                            <img src={Image1} alt="" />
                                            <p className="text-black fs-3">says</p>
                                        </div>
                                        <img src={Image2} alt="" />
                                        <p className="fs-5 w-50 text-center mt-4">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="material-symbols-sharp forward"> arrow_back </span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="material-symbols-sharp forward"> arrow_forward </span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="section4-bottom">
                    <div className="container pt-5">
                        <div className="row gap-3 px-md-0 px-4">
                            <div className="col-12 d-flex flex-column align-items-center">
                                <sub>#Evidence-based Information</sub>
                                <h2 className="pt-4">The Science of Wellness</h2>
                            </div>
                            <div className="col-lg col-md sec4-bottom-div1 text-white">
                                <div className="d-flex flex-column px-4">
                                    <p className="fs-4">
                                        14 Supplements to Manage Your Cortisol Levels
                                    </p>
                                    <div className="d-flex gap-3 align-items-start">
                                        <img src={Image3} alt="" />
                                        <p>5 mins read</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-md sec4-bottom-div1 text-white">
                                <div className="d-flex flex-column px-4">
                                    <p className="fs-4">
                                        14 Supplements to Manage Your Cortisol Levels
                                    </p>
                                    <div className="d-flex gap-3 align-items-start">
                                        <img src={Image3} alt="" />
                                        <p>5 mins read</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-md-6 sec4-bottom-div1 text-white mx-md-auto">
                                <div className="d-flex flex-column px-4">
                                    <p className="fs-4">
                                        14 Supplements to Manage Your Cortisol Levels
                                    </p>
                                    <div className="d-flex gap-3 align-items-start">
                                        <img src={Image3} alt="" />
                                        <p>5 mins read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
