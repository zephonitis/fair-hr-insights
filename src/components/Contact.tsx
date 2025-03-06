
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend here
    console.log("Form submitted:", formState);
    // Simulate a successful submission
    setIsSubmitted(true);
    // Reset the form
    setFormState({
      name: "",
      email: "",
      company: "",
      message: "",
    });
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-scout-olive/5 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-scout-dark-olive font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-scout-olive/20 focus:border-scout-olive focus:ring-2 focus:ring-scout-olive/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-scout-dark-olive font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-scout-olive/20 focus:border-scout-olive focus:ring-2 focus:ring-scout-olive/20 outline-none transition-all"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-scout-dark-olive font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-scout-olive/20 focus:border-scout-olive focus:ring-2 focus:ring-scout-olive/20 outline-none transition-all"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-scout-dark-olive font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-scout-olive/20 focus:border-scout-olive focus:ring-2 focus:ring-scout-olive/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your recruitment needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-scout-olive hover:bg-scout-dark-olive text-white py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </button>
              
              {isSubmitted && (
                <div className="bg-scout-tan/10 border border-scout-tan text-scout-brown p-4 rounded-lg animate-fadeIn">
                  Thank you for reaching out! We'll get back to you shortly.
                </div>
              )}
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-scout-olive font-medium">GET IN TOUCH</p>
              <h2 className="text-balance">
                Ready to Transform Your <span className="text-scout-olive">Hiring Process?</span>
              </h2>
              <p className="text-scout-dark-olive/80">
                Contact us to learn how ScoutX can help your organization find the right talent more efficiently and fairly. Our team is ready to answer your questions and provide a personalized demo.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-scout-olive/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-scout-olive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-scout-dark-olive/70">info@scoutx.io</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-scout-olive/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-scout-olive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-scout-dark-olive/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-scout-olive/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-scout-olive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-scout-dark-olive/70">
                      123 Innovation Drive <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 rounded-2xl bg-scout-olive text-white">
              <h3 className="text-2xl font-bold mb-4">Schedule a Demo</h3>
              <p className="mb-6">
                See ScoutX in action with a personalized demo tailored to your organization's needs.
              </p>
              <a
                href="#"
                className="block w-full bg-white text-scout-olive hover:bg-scout-cream py-3 rounded-lg font-medium text-center transition-colors"
              >
                Book a Demo Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
