import React from 'react';
import { Redirect } from 'react-router-dom';
import Categories from './Categories';
import '../../styles/SelectCategory.css';
import SubCategories from './SubCategories';

const SelectCategory = function () {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = React.useState(null);

  return selectedCategory && selectedSubCategory ? (
    <Redirect to={`/place-an-ad/${selectedCategory}/${selectedSubCategory}`} />
  ) : (
    <section className="select-category">
      <h4 className="text-center">Hello, what are you listing today?</h4>
      <h6 className="text-center fw-light mb-5">Select the area that best suits your ad</h6>
      <div className="select-box">
        <div className="row no-gutters">
          <div className={`col-${selectedCategory === null ? '12' : '6'}`}>
            <div className="box-header">
              <h4 className="m-0 fw-bold">CHOOSE A CATEGORY</h4>
            </div>
            <div className="row">
              <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>
          </div>
          <div className={selectedCategory !== null ? 'col-6 border-start' : 'd-none'}>
            <div className="box-header">
              <h4 className="m-0 fw-bold">CHOOSE A SUB-CATEGORY</h4>
            </div>
            <div className="subCat">
              <SubCategories selectedCategory={selectedCategory} setSelectedSubCategory={setSelectedSubCategory} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectCategory;
