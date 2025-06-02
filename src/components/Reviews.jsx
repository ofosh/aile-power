import React from "react";
import { testimonials } from "../assets";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 max-w-full overflow-hidden "
      id="Reviews"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">
        Reviews{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          About The Product
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        What other people say about AilePower Product
      </p>
      <div className="w-[400px] lg:w-[500px] m-auto">
        <div className="mt-5">
          <Slider {...settings}>
            {testimonials.map((d, id) => (
              <div key={id} className="h-[300px] rounded-xl bg-orange-50">
                <div className="flex justify-center items-center h-56">
                  <p className="px-3 lg:px-4 text-[18px] w-[400px] text-left font-normal">
                    {d.text}
                  </p>
                </div>

                <div>
                  <h3 className="text-center text-xl font-semibold">
                    {d.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
