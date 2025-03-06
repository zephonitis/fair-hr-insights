
import React from "react";
import { Linkedin, Mail, FileSearch, Upload, BarChart3, Award } from "lucide-react";
import AnimatedImage from "./ui/AnimatedImage";
import { cn } from "@/lib/utils";

const Features = () => {
  const features = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn Integration",
      description: "Post jobs directly to LinkedIn and automatically import applications for screening.",
      color: "bg-scout-tan/10",
      textColor: "text-scout-brown",
      delay: 0.1,
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Application Management",
      description: "Receive, organize, and screen email applications automatically with our AI system.",
      color: "bg-scout-olive/10",
      textColor: "text-scout-olive",
      delay: 0.2,
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Bulk Application Screening",
      description: "Process applications from Google Drive folders with a single click.",
      color: "bg-scout-dark-olive/10",
      textColor: "text-scout-dark-olive",
      delay: 0.3,
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Resume Upload & Analysis",
      description: "Upload multiple resumes for instant screening and comparison.",
      color: "bg-scout-tan/10",
      textColor: "text-scout-brown",
      delay: 0.4,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Access comprehensive metrics on jobs and candidates to inform better decisions.",
      color: "bg-scout-olive/10",
      textColor: "text-scout-olive",
      delay: 0.5,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Detailed Candidate Scoring",
      description: "Receive detailed analysis and scoring for each candidate based on job requirements.",
      color: "bg-scout-dark-olive/10",
      textColor: "text-scout-dark-olive",
      delay: 0.6,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-scout-olive font-medium mb-3">OUR SOLUTION</p>
          <h2 className="mb-6">
            Intelligent Screening <span className="text-scout-olive">Made Simple</span>
          </h2>
          <p className="text-scout-dark-olive/80">
            ScoutX combines cutting-edge AI with intuitive design to transform your recruitment process from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-8 border border-scout-olive/10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-slideUp"
              style={{ animationDelay: `${feature.delay}s` }}
            >
              <div className={cn("w-16 h-16 rounded-lg flex items-center justify-center mb-6", feature.color)}>
                <div className={feature.textColor}>{feature.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-scout-dark-olive/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-scout-olive font-medium">MEET SCOUTX</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              See How ScoutX <span className="text-scout-brown">Transforms</span> Your Hiring Process
            </h2>
            <p className="text-scout-dark-olive/80">
              Our intuitive dashboard gives you complete control over your recruitment pipeline, with powerful AI working behind the scenes to deliver accurate candidate assessments.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-scout-olive hover:bg-scout-dark-olive text-white px-8 py-4 rounded-md font-medium transition-all duration-300"
              >
                Request Demo
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 relative">
            <div className="absolute -z-10 w-[120%] h-[120%] bg-scout-olive/5 rounded-[40px] -rotate-3 -top-[10%] -left-[10%]"></div>
            <AnimatedImage
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="ScoutX dashboard showing candidate analysis"
              className="w-full rounded-2xl shadow-2xl border border-scout-cream"
              animation="slideInRight"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-xl shadow-xl animate-float">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-scout-olive rounded-full flex items-center justify-center text-white text-xl font-bold">
                  83%
                </div>
                <div>
                  <h4 className="font-semibold">Time Saved</h4>
                  <p className="text-sm text-scout-dark-olive/70">In screening process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
