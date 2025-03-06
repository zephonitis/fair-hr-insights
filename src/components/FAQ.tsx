
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does ScoutX's AI screening technology work?",
      answer:
        "ScoutX uses a sophisticated AI model trained on millions of successful hires. It analyzes resumes for relevant skills, experience, and cultural fit based on job requirements. Unlike keyword matching tools, our AI understands context and can identify potential even when a candidate's resume doesn't use the exact terminology in the job description.",
    },
    {
      question: "How long does it take to implement ScoutX?",
      answer:
        "Most clients are up and running with ScoutX within 24-48 hours. Our onboarding team will guide you through the process, including integration with your existing systems, setting up your first job, and training your team on how to use the platform effectively.",
    },
    {
      question: "Is ScoutX compliant with hiring regulations?",
      answer:
        "Yes, ScoutX is designed with compliance in mind. Our AI has been thoroughly tested for bias and fairness across protected categories. We regularly audit our algorithms to ensure they meet or exceed legal requirements for non-discrimination in hiring processes across various jurisdictions.",
    },
    {
      question: "Can ScoutX integrate with our existing ATS (Applicant Tracking System)?",
      answer:
        "Yes, ScoutX offers seamless integration with most popular ATS platforms, including Workday, Greenhouse, Lever, and more. Our API also allows for custom integrations with proprietary systems. During implementation, we'll work with your IT team to ensure smooth data flow between systems.",
    },
    {
      question: "How accurate is ScoutX's candidate scoring?",
      answer:
        "ScoutX achieves a 97% accuracy rate when matching candidates to job requirements. This is significantly higher than traditional keyword-based screening methods. Our system also provides confidence scores for each assessment, giving you transparency into the decision-making process.",
    },
    {
      question: "What support options do you offer?",
      answer:
        "All plans include access to our knowledge base and email support. Professional plans include priority support with faster response times. Enterprise clients receive a dedicated account manager and 24/7 premium support. We also offer optional training sessions for your team to maximize the value of ScoutX.",
    },
    {
      question: "Can we customize the screening criteria?",
      answer:
        "Yes, Enterprise plans include fully customizable screening criteria. You can assign weights to different skills, experiences, or attributes based on your organization's specific needs. Professional plans offer limited customization, while Starter plans use our standard assessment model.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-scout-olive font-medium mb-3">FAQ</p>
          <h2 className="mb-6">
            Frequently Asked <span className="text-scout-olive">Questions</span>
          </h2>
          <p className="text-scout-dark-olive/80">
            Find answers to common questions about ScoutX and how it can transform your recruitment process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border rounded-xl overflow-hidden transition-all duration-300",
                  openItem === index
                    ? "bg-scout-olive text-white border-scout-olive"
                    : "bg-white border-scout-olive/10 hover:border-scout-olive/30"
                )}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-semibold"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-xl">{item.question}</span>
                  <span>
                    {openItem === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openItem === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="p-6 pt-0">
                    <p className={openItem === index ? "text-white/90" : ""}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 text-scout-dark-olive/90">
              Still have questions? We're here to help.
            </p>
            <a
              href="#contact"
              className="inline-block bg-scout-olive hover:bg-scout-dark-olive text-white px-8 py-4 rounded-md font-medium transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
