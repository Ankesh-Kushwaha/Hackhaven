import React from 'react';

const AppCTA = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 text-center bg-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Get CureShare on your phone and<br />stay connected with clinical wisdom on the go.
      </h2>
      <p className="text-gray-600 text-lg mb-8">
        Coming soon on iOS and Android platforms.
      </p>

      {/* Optional buttons for future app store links */}
      <div className="flex justify-center gap-4">
        <button className="bg-gray-900 text-white px-5 py-3 rounded-xl text-sm font-medium opacity-60 cursor-not-allowed">
          App Store
        </button>
        <button className="bg-gray-900 text-white px-5 py-3 rounded-xl text-sm font-medium opacity-60 cursor-not-allowed">
          Google Play
        </button>
      </div>

      {/* Decorative blur gradients */}
      <div className="absolute -bottom-10 left-10 w-40 h-40 bg-yellow-200 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-40 h-40 bg-pink-300 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default AppCTA;
