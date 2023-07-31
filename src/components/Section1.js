import React from 'react';
import imagechat from './images/Chat.svg';
import imageicon from './images/iconGiftBold.svg';
import imageanarkey from './images/AnarkeyIconsByAnima.svg';

export default function Section1() {
  return (
    <div className="section1">
        <div className="section1-content wrapper">
          <div className="section1-top">
            <h1>Your unique blend for optimal health and wellness.</h1>
            <button className="btn btn-dark button-yellow px-4 py-2 mt-4">
              Take a quiz - It's Free
            </button>
          </div>
          <div className="section1-bottom container-fluid px-5 py-5">
            <div className="row">
              <div className="col-md-4 mx-md-0 col-12 mx-3 d-flex gap-3 mb-md-0 mb-4">
                <div>
                  <img src={imagechat} alt="Chat" />
                </div>
                <div>
                  <h3>Your Supplement Quiz</h3>
                  <p className="text-secondary">
                    Discover tailored results just for you in our quick 2-minute free
                    quiz!
                  </p>
                </div>
              </div>
              <div className="col-md-4 mx-md-0 col-12 mx-3 d-flex gap-3 mb-md-0 mb-4">
                <div>
                  <img src={imageicon} alt="iconGiftBold" />
                </div>
                <div>
                  <h3>Customized Recommendations</h3>
                  <p className="text-secondary">
                    Find your perfect supplements based on your unique needs and
                    goals!
                  </p>
                </div>
              </div>
              <div className="col-md-4 me-md-0 col-12 me-3 d-flex gap-3 mb-md-0 mb-4">
                <div>
                  <img
                    src={imageanarkey}
                    alt="AnarkeyIconsByAnima"
                  />
                </div>
                <div>
                  <h3>Building Habits</h3>
                  <p className="text-secondary">
                    Embark on your path to better health with expert guidance every
                    step of the way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
