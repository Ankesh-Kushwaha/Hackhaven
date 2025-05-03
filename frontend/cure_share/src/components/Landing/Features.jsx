import React from 'react';

const features = [
  { text: "Verified Doctors Access Only", color: "bg-green-100" },
  { text: "Real-World Case Sharing", color: "bg-orange-100" },
  { text: "Case Search & Tagging", color: "bg-blue-100" },
  { text: "Peer-to-Peer Learning", color: "bg-green-100" },
  { text: "Community Collaboration", color: "bg-orange-100" },
  { text: "Featured / Trending Cases", color: "bg-blue-100" },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 px-6 md:px-20  text-center overflow-hidden"
    // style={{
    //       background:
    //         "radial-gradient( rgb(210, 217, 224) 10%, rgb(215, 212, 224) 40%, rgb(242, 183, 183) 100%)",
    //     }}

    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Explore Features of CureShare
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} p-6 rounded-2xl shadow-sm text-base md:text-lg font-medium text-gray-800`}
          >
            {feature.text}
          </div>
        ))}
      </div>

      {/* Soft blur backgrounds */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-200 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-200 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Features;
