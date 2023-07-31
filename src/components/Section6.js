import React from 'react';
import Image1 from './images/svg.svg';
import Image2 from './images/svg (1).svg';
import Image3 from './images/svg (2).svg';

export default function Section6() {
    return (
        <div className="section6">
            <div className="section6-container wrapper">
                <div className="container-fluid mx-0">
                    <div className="row">
                        <div className="col-lg-6 sec6-div1">
                            <div className="col-12 d-flex flex-column align-items-center">
                                <sub>Follow Us</sub>
                                <h2 className="pt-4">Meet Our Community</h2>
                                <p>Join the @Soso and share your voice with us.</p>
                            </div>
                            <div className="socialsss d-flex justify-content-center">
                                <div className="socialss d-flex flex-column">
                                    <div className="social d-flex align-items-start gap-3 mt-5">
                                        <img src={Image1} alt="instagram" />
                                        <div>
                                            <h4>Instagram</h4>
                                            <p>@SoSo</p>
                                        </div>
                                    </div>
                                    <div className="social d-flex align-items-start gap-3 mt-5">
                                        <img src={Image2} alt="Tiktok" />
                                        <div>
                                            <h4>Tiktok</h4>
                                            <p>@SoSo</p>
                                        </div>
                                    </div>
                                    <div className="social d-flex align-items-start gap-3 mt-5">
                                        <img src={Image3} alt="Twitter" />
                                        <div>
                                            <h4>Twitter</h4>
                                            <p>@SoSo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-5 text-center">
                                <p>© 2023 Brand, Inc. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-block d-none sec6-div2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
