import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import Slider from "react-slick"

const settings = {
  className: "slide-center",
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      }
    ]
};

const Testimonials = ({ testimonials }) => (
  
  <div>
    <Slider {...settings}>
    {testimonials.map((testimonial) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
    </Slider>
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
