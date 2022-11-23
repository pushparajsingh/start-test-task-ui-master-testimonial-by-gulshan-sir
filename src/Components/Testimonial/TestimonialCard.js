import React from 'react';
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const TestimonialCard = ({list}) => {
    return(
        <Slider 
            {...settings}
        >
            {
                list?.map((item, index) => {
                return (
                    <div className="col-lg-12" key={index}>
                        <div className="single-testimonial mt-30 mb-30 text-center">
                        <div className="testimonial-image">
                            <img src={item?.Photo?.file} alt="Author" />
                        </div>
                        <div className="testimonial-content">
                            <p className="text">{item?.Description}</p>
                            <h6 className="author-name">{item?.Name}</h6>
                            <span className="sub-title">{item?.Post}</span>
                        </div>
                        </div>
                    </div>
                )
                })
            }
        </Slider>
    )
}
export default TestimonialCard;