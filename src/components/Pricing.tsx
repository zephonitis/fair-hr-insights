
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: isAnnual ? 99 : 129,
      features: [
        "Up to 50 applications per month",
        "LinkedIn job posting",
        "Email application handling",
        "Basic candidate scoring",
        "Standard support",
      ],
      notIncluded: [
        "Bulk application screening",
        "Advanced analytics",
        "API access",
        "Custom scoring criteria",
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "bg-scout-cream",
      borderColor: "border-scout-olive/20",
      hoverColor: "hover:border-scout-olive/50",
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and mid-size companies",
      price: isAnnual ? 249 : 299,
      features: [
        "Up to 250 applications per month",
        "LinkedIn job posting",
        "Email application handling",
        "Bulk application screening",
        "Advanced candidate scoring",
        "Real-time analytics",
        "Priority support",
      ],
      notIncluded: [
        "API access",
        "Custom scoring criteria",
      ],
      cta: "Get Started",
      popular: true,
      color: "bg-scout-olive text-white",
      borderColor: "border-scout-olive",
      hoverColor: "hover:shadow-xl",
    },
    {
      name: "Enterprise",
      description: "For organizations with complex hiring needs",
      price: isAnnual ? 599 : 699,
      features: [
        "Unlimited applications",
        "All Professional features",
        "API access",
        "Custom scoring criteria",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 premium support",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
      color: "bg-scout-cream",
      borderColor: "border-scout-brown/20",
      hoverColor: "hover:border-scout-brown/50",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-scout-olive font-medium mb-3">PRICING</p>
          <h2 className="mb-6">
            Simple, Transparent <span className="text-scout-olive">Pricing</span>
          </h2>
          <p className="text-scout-dark-olive/80 mb-10">
            Choose the plan that fits your recruitment needs. All plans include a 14-day free trial with no credit card required.
          </p>

          <div className="flex items-center justify-center mb-16">
            <div className="flex p-1 bg-scout-olive/10 rounded-full">
              <button
                className={cn(
                  "px-6 py-2 rounded-full transition-all",
                  isAnnual
                    ? "bg-scout-olive text-white shadow-md"
                    : "text-scout-dark-olive"
                )}
                onClick={() => setIsAnnual(true)}
              >
                Annual (20% off)
              </button>
              <button
                className={cn(
                  "px-6 py-2 rounded-full transition-all",
                  !isAnnual
                    ? "bg-scout-olive text-white shadow-md"
                    : "text-scout-dark-olive"
                )}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl border-2 transition-all duration-300 overflow-hidden animate-slideUp",
                plan.borderColor,
                plan.hoverColor,
                plan.popular && "md:-translate-y-4"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="bg-scout-brown text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className={cn("p-8", plan.color)}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-opacity-80 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-opacity-70">/month</span>
                </div>
                <button
                  className={cn(
                    "w-full py-3 rounded-lg font-medium transition-all",
                    plan.popular
                      ? "bg-white text-scout-olive hover:bg-scout-cream"
                      : "bg-scout-olive text-white hover:bg-scout-dark-olive"
                  )}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="p-8 bg-white">
                <p className="font-semibold mb-4">What's included:</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-scout-olive mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.notIncluded.length > 0 && (
                  <>
                    <p className="font-semibold mb-4 text-scout-dark-olive/70">
                      Not included:
                    </p>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-scout-dark-olive/50">
                          <X className="w-5 h-5 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-scout-dark-olive/70">
            Need a custom solution for your organization?
          </p>
          <a
            href="#contact"
            className="inline-block underline text-scout-olive font-medium hover:text-scout-brown transition-colors"
          >
            Contact our sales team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
