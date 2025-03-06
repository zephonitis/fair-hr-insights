
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "ScoutX has transformed our recruitment process. We've reduced screening time by 78% while making better quality hires. The candidate scoring system is incredibly accurate.",
      author: "Sarah Johnson",
      position: "Head of Talent Acquisition",
      company: "TechGlobal Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&dpr=2",
    },
    {
      quote:
        "As a growing startup, we couldn't afford to make bad hires. ScoutX helped us identify the right candidates quickly, saving us countless hours and preventing costly hiring mistakes.",
      author: "Michael Chen",
      position: "Founder & CEO",
      company: "InnovateLabs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&dpr=2",
    },
    {
      quote:
        "The analytics dashboard gives us incredible insights into our recruitment funnel. We've optimized our entire process based on ScoutX's data, resulting in a 40% faster time-to-hire.",
      author: "Priya Patel",
      position: "HR Director",
      company: "EnterpriseNow",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&dpr=2",
    },
    {
      quote:
        "What sets ScoutX apart is how it eliminates bias in the screening process. We've seen a significant increase in diversity of candidates reaching the interview stage.",
      author: "James Wilson",
      position: "Chief People Officer",
      company: "FutureTech Solutions",
      avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&auto=format&dpr=2",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-scout-dark-olive text-scout-cream overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-scout-tan font-medium mb-3">TESTIMONIALS</p>
          <h2 className="mb-6">What Our Clients Say</h2>
          <p className="text-scout-cream/80">
            See how ScoutX has transformed recruitment processes for organizations across industries.
          </p>
        </div>

        <div className="relative">
          {/* Large screen testimonials */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "p-8 rounded-2xl transition-all duration-500 transform",
                  index === activeIndex
                    ? "bg-white text-scout-dark-olive scale-105 shadow-xl"
                    : "bg-white/10 hover:bg-white/20 cursor-pointer"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="inline-block w-5 h-5 mr-1"
                      fill={index === activeIndex ? "#DDA15E" : "#FEFAE0"}
                      color={index === activeIndex ? "#DDA15E" : "#FEFAE0"}
                    />
                  ))}
                </div>
                <p className="mb-6 text-balance">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className={index === activeIndex ? "text-scout-dark-olive/70" : "text-scout-cream/70"}>
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile and tablet testimonials */}
          <div className="lg:hidden">
            <div
              className="p-8 rounded-2xl bg-white text-scout-dark-olive shadow-xl mb-8"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="inline-block w-5 h-5 mr-1"
                    fill="#DDA15E"
                    color="#DDA15E"
                  />
                ))}
              </div>
              <p className="mb-6">"{testimonials[activeIndex].quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{testimonials[activeIndex].author}</p>
                  <p className="text-scout-dark-olive/70">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-slideUp" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl md:text-5xl font-bold text-scout-tan mb-2">500+</div>
            <p className="text-scout-cream/80">Companies</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl md:text-5xl font-bold text-scout-tan mb-2">1.5M+</div>
            <p className="text-scout-cream/80">Applications Screened</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl md:text-5xl font-bold text-scout-tan mb-2">97%</div>
            <p className="text-scout-cream/80">Accuracy Rate</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl md:text-5xl font-bold text-scout-tan mb-2">82%</div>
            <p className="text-scout-cream/80">Time Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
