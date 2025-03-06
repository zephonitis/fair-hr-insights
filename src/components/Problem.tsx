
import React from "react";
import { Clock, ThumbsDown, BrainCircuit, Helping } from "lucide-react";
import AnimatedImage from "./ui/AnimatedImage";

const Problem = () => {
  const problemCards = [
    {
      icon: <Clock className="w-12 h-12 text-scout-olive" />,
      title: "Time Consuming",
      description:
        "HR teams spend up to 23 hours screening resumes for a single hire, delaying the entire recruitment process.",
    },
    {
      icon: <ThumbsDown className="w-12 h-12 text-scout-olive" />,
      title: "Inherent Bias",
      description:
        "Human screeners unknowingly bring personal biases to candidate evaluation, affecting diversity and hiring quality.",
    },
    {
      icon: <BrainCircuit className="w-12 h-12 text-scout-olive" />,
      title: "Missed Talent",
      description:
        "Qualified candidates are often overlooked due to keyword mismatch or resume format inconsistencies.",
    },
    {
      icon: <Helping className="w-12 h-12 text-scout-olive" />,
      title: "Poor Experience",
      description:
        "Slow feedback and processing times create negative candidate experiences, damaging your employer brand.",
    },
  ];

  return (
    <section id="problem" className="bg-scout-dark-olive text-scout-cream py-20 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="HR professional overwhelmed with applications"
              className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              animation="slideInLeft"
            />
            <div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-xl bg-scout-cream/10 backdrop-blur-md border border-white/10 text-white">
              <p className="font-bold text-2xl mb-1">76%</p>
              <p className="text-sm opacity-90">of recruiters struggle with application volume</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-scout-tan uppercase tracking-wider font-semibold">The Challenge</p>
              <h2 className="text-balance">Recruitment Shouldn't Be This Hard</h2>
              <p className="opacity-90 text-balance">
                Today's recruitment landscape is broken. HR departments are drowning in applications while missing qualified candidates, causing frustration for everyone involved.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {problemCards.map((card, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-base opacity-80">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
