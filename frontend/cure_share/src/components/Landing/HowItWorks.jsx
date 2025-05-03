import React from 'react';
//import appPreview from '../../images/app-preview.png'; // Update path if needed

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">How does it work</h2>
      <p className="text-gray-600 mb-12 text-base md:text-lg">
        Built for doctors, CureShare makes clinical learning fast, secure, and rewarding
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image preview */}
        {/* <img
          src={appPreview}
          alt="App Preview"
          className="w-72 md:w-80 rounded-2xl shadow-xl"
        /> */}

        {/* Steps card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 w-full md:max-w-md text-left space-y-4 text-gray-700 text-base md:text-lg">
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <p>Sign Up & Get Verified</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <p>Post Clinical Cases</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <p>Discover & Upvote</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <p>Discuss & Learn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
