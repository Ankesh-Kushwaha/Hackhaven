import React from "react";
import { User, FileText, ThumbsUp, MessageCircle } from "lucide-react";
import createPostImg from "../../images/createpostpic.png"

const steps = [
  {
    icon: <User className="text-blue-600 w-6 h-6" />,
    title: "Sign Up & Get Verified",
    desc: "Only verified medical professionals can join CureShare for a secure, trusted network.",
  },
  {
    icon: <FileText className="text-blue-600 w-6 h-6" />,
    title: "Post Clinical Cases",
    desc: "Share anonymized, real-world cases from your experience.",
  },
  {
    icon: <ThumbsUp className="text-blue-600 w-6 h-6" />,
    title: "Discover & Upvote",
    desc: "Browse by symptoms, tags, or specialties. Upvote insightful cases to help them rise to the top.",
  },
  {
    icon: <MessageCircle className="text-blue-600 w-6 h-6" />,
    title: "Discuss & Learn",
    desc: "Join threaded discussions, ask questions, and share your insights with peers worldwide.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 md:px-20   text-gray-800">
      <div className="text-center mb-12"
       
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How does it work
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Built for doctors — CureShare makes sharing, discovering, and learning
          from real clinical cases simple and impactful.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left UI mockup */}
        <div className="relative w-full max-w-md">
          {/* Create new Case post card */}
          <div className=" rounded-xl shadow-xl p-4 mb-10">
 
            {/* Inserted Image */}
            <img
              src={createPostImg} 
              alt="Case Preview"
              className="w-full h-100 object-cover rounded-md"
            />
             
          </div>
        
        </div>

        {/* Right Steps */}
        <div className="w-full max-w-lg space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{step.icon}</div>
              <div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
