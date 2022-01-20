/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../../styles/Pagination.css';

export default function Pagination() {
  const [currentPage, setCurrentPage] = React.useState(4);
  const maxPages = 10;
  const items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={() => { setCurrentPage(number); }}>
        {number}
      </div>,
    );
  }

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginationRender = (
    <div className="pg flex-container">
      <div className="paginate-ctn">
        <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
        {items}
        <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
      </div>
    </div>
  );
  return (paginationRender);
}
