
import React from "react";
import { ArrowDownCircle } from "lucide-react";
import AnimatedImage from "./ui/AnimatedImage";

const Hero = () => {
  const scrollToFeatures = () => {
    document.querySelector("#problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-scout-olive/5 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div>
              <p className="text-scout-olive font-medium mb-4 animate-slideInLeft">
                AI-Powered HR Solution
              </p>
              <h1 className="text-balance">
                Hire Better, <br />
                <span className="text-scout-olive">Faster, Fairer.</span>
              </h1>
            </div>
            <p className="text-scout-dark-olive/80 text-balance animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
              ScoutX transforms your recruitment process with AI, screening applications reliably and fairly. Free your HR team for what matters most: human connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 animate-slideInLeft" style={{ animationDelay: "0.4s" }}>
              <a
                href="#contact"
                className="bg-scout-olive hover:bg-scout-dark-olive text-white text-lg px-8 py-4 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Start Screening Today
              </a>
              <a
                href="#features"
                className="bg-transparent border-2 border-scout-olive text-scout-olive hover:bg-scout-olive/10 text-lg px-8 py-4 rounded-md font-medium transition-all duration-300 text-center"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="relative h-[500px] animate-slideInRight">
            <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-scout-tan/20 rounded-3xl transform rotate-3"></div>
            <div className="absolute top-0 right-0 w-full h-full glass-card rounded-3xl overflow-hidden">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="AI-powered HR professional reviewing applications"
                className="w-full h-full object-cover rounded-3xl"
                animation="fadeIn"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 glass-card rounded-xl animate-float shadow-lg">
              <div className="flex gap-3 items-center">
                <div className="w-16 h-16 bg-scout-olive rounded-full flex items-center justify-center text-white text-xl font-bold">
                  97%
                </div>
                <div>
                  <h4 className="text-scout-dark-olive font-semibold">Accuracy Rate</h4>
                  <p className="text-sm text-scout-dark-olive/70">In candidate matching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button onClick={scrollToFeatures} aria-label="Scroll down">
          <ArrowDownCircle className="w-10 h-10 text-scout-olive" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
