import React, { useState } from 'react';

export default function Section5() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const questionsData = [
        {
            question: 'How do I choose the right supplement for my needs?',
            answer:
                'We offer a personalized quiz that takes into account your specific health goals, dietary preferences, and lifestyle factors. Based on your responses, we provide tailored recommendations to help you find the supplements that best suit your needs.',
        },
        {
            question: 'Can I take multiple supplements together?',
            answer:
                'We offer a personalized quiz that takes into account your specific health goals, dietary preferences, and lifestyle factors. Based on your responses, we provide tailored recommendations to help you find the supplements that best suit your needs.',
        },
        {
            question: 'Are your supplements suitable for vegetarians/vegans?',
            answer:
                'We offer a personalized quiz that takes into account your specific health goals, dietary preferences, and lifestyle factors. Based on your responses, we provide tailored recommendations to help you find the supplements that best suit your needs.',
        },
    ];
    return (
        <div className="section5 mb-0">
            <div className="section-container wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-column align-items-center">
                            <sub>#All the help you need</sub>
                            <h2 className="pt-4">We know you are curious!</h2>
                        </div>
                    </div>
                    <ul className="accordion mt-5">
                        {questionsData.map((item, index) => (
                            <li key={index}>
                                <h3
                                    className={`question fs-5 ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.question}
                                    <button className="toggle-button">
                                        {activeIndex === index ? '×' : '+'}
                                    </button>
                                </h3>
                                {activeIndex === index && (
                                    <div className="description">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                        <li>
                            Still have questions? <a href="#FAQs" className="fw-bold">Visit the FAQs page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
