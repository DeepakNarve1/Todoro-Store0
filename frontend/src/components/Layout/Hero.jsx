import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/HeroSection1.png";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Todoro"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center z-10">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link
            to="collections/all"
            className="bg-white text-black px-6 py-3 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
