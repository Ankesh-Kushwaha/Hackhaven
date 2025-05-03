import React from 'react';

const FilterTags = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-80">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Filters</h3>
      <div className="space-y-3">
        <label className="flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>System</span>
        </label>
        <label className="flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Specialty</span>
        </label>
        <label className="flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Tags</span>
        </label>
      </div>
    </div>
  );
};

export default FilterTags