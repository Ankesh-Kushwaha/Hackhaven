import React from 'react';

const FilterTags = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="font-semibold mb-2">Filters</h3>
      <div>
        <label className="block mb-1">
          <input type="checkbox" className="mr-2" /> System
        </label>
        <label className="block mb-1">
          <input type="checkbox" className="mr-2" /> Specialty
        </label>
        <label className="block mb-1">
          <input type="checkbox" className="mr-2" /> Tags
        </label>
      </div>
    </div>
  );
};

export default FilterTags