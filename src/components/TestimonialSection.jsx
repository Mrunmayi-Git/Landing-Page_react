import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const testimonials = [
  { id: 1, name: "Robin Ayala Doe", image: "https://randomuser.me/api/portraits/men/77.jpg", text: "Exceptional service and an outstanding experience! Their platform has transformed my business." },
  { id: 2, name: "John De Marli", image: "https://randomuser.me/api/portraits/women/90.jpg", text: "Highly professional and responsive team. Their support made all the difference for me!" },
  { id: 3, name: "Rowhan Smith", image: "https://randomuser.me/api/portraits/men/90.jpg", text: "Their product is simply amazing! It’s intuitive, efficient, and exactly what I needed." },
  { id: 4, name: "Sarah Johnson", image: "https://randomuser.me/api/portraits/women/45.jpg", text: "I love how easy everything is to use. The customer service is truly top-notch! Highly recommended " },
  { id: 5, name: "Michael Chen", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "Using their platform has boosted my productivity and efficiency significantly. Highly recommended!" },
  { id: 6, name: "Emma Wilson", image: "https://randomuser.me/api/portraits/women/28.jpg", text: "They truly care about their customers. A wonderful experience from start to finish!  Highly recommended!!" },
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className='py-20 px-6 max-w-7xl mx-auto 'id='testimonials'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-extrabold text-gray-800 mb-4'>What Our Clients Say</h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>Hear from our happy customers about how we’ve transformed their experience.</p>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button 
          onClick={() => swiperRef.current?.slidePrev()} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 z-10"
        >
          <BsChevronLeft className="size-6" />
        </button>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-200 text-center transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-between">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full mx-auto border-4 border-blue-500 mb-4" 
                />
                <p className="text-gray-700 text-lg italic flex-1">"{testimonial.text}"</p>
                <h4 className="font-semibold mt-4 text-xl text-gray-800">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button 
          onClick={() => swiperRef.current?.slideNext()} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 z-10"
        >
          <BsChevronRight className="size-6" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
