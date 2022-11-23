import axiosInstance from '../../Service/Config'
import React, { useEffect, useState } from 'react'
import TestimonialCard from '../../Components/Testimonial/TestimonialCard'

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    getTestimonialList()
  }, [])

  const getTestimonialList = async() => {
    const result = await axiosInstance.get('all');
    try{
      if(result?.data){
        setTestimonials(result?.data)
      }
    }catch(error){
      console.log('list', error)
    }
  }

  return (
      <section id="testimonial" className="testimonial-area" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Testimonial</h4>
                <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row testimonial-active">
                <TestimonialCard list={testimonials}/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
export default TestimonialSection;