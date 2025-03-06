
import React from "react";
import { Check } from "lucide-react";
import AnimatedImage from "./ui/AnimatedImage";

const AboutUs = () => {
  const values = [
    {
      title: "Fairness",
      description: "We believe in giving every candidate an equal opportunity through objective evaluation.",
    },
    {
      title: "Efficiency",
      description: "We value your time and build solutions that eliminate unnecessary manual processes.",
    },
    {
      title: "Transparency",
      description: "Our algorithms work in the open, providing clear explanations for every decision.",
    },
    {
      title: "Innovation",
      description: "We continuously improve our technology to stay ahead of recruitment challenges.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-scout-olive/5 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-scout-olive font-medium mb-3">ABOUT US</p>
            <h2 className="mb-6">
              The Team Behind <span className="text-scout-olive">ScoutX</span>
            </h2>
            <p className="text-scout-dark-olive/80 mb-8">
              Founded in 2021 by HR professionals and AI engineers, ScoutX was born from a shared frustration with traditional recruitment processes. We've combined decades of HR expertise with cutting-edge AI to create a solution that truly understands the nuances of hiring.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-scout-olive/10 p-1 rounded-full">
                  <Check className="w-5 h-5 text-scout-olive" />
                </div>
                <p className="text-scout-dark-olive/90">
                  <strong>20+ years</strong> of combined recruitment experience
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-scout-olive/10 p-1 rounded-full">
                  <Check className="w-5 h-5 text-scout-olive" />
                </div>
                <p className="text-scout-dark-olive/90">
                  <strong>AI model</strong> trained on millions of successful placements
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-scout-olive/10 p-1 rounded-full">
                  <Check className="w-5 h-5 text-scout-olive" />
                </div>
                <p className="text-scout-dark-olive/90">
                  <strong>98% satisfaction rate</strong> from our enterprise clients
                </p>
              </div>
            </div>
            
            <div>
              <a
                href="#contact"
                className="inline-block bg-scout-olive hover:bg-scout-dark-olive text-white px-8 py-4 rounded-md font-medium transition-all duration-300"
              >
                Meet Our Team
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 w-[110%] h-[110%] bg-scout-tan/10 rounded-[40px] rotate-3 -top-[5%] -left-[5%]"></div>
            <AnimatedImage
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="ScoutX team collaborating"
              className="w-full rounded-2xl shadow-xl"
              animation="slideInRight"
            />
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white shadow-md animate-slideUp"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-scout-brown">{value.title}</h3>
                  <p className="text-scout-dark-olive/70 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
