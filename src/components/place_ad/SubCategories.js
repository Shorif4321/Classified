/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import useCategories from '../../hooks/useCategories';

const SubCategories = function ({ selectedCategory, setSelectedSubCategory }) {
  const { categoryData } = useCategories();
  return (
    <div>
      {
        categoryData[selectedCategory] && categoryData[selectedCategory].map((category) => <SubCategory setSelected={setSelectedSubCategory} key={Math.random()} title={category} />)
      }
    </div>
  );
};

const SubCategory = function ({
  title, className = '', setSelected, ...rest
}) {
  return (
    <div role="button" style={{ cursor: 'pointer' }} onClick={() => setSelected(title.toLowerCase())} className={`category sub-cat d-flex align-items-center ${className}`} {...rest}>
      <h6 className="category-title m-0 ms-4">{title}</h6>
    </div>
  );
};

export default SubCategories;
