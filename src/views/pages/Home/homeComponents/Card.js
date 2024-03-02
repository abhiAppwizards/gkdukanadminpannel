import React from 'react';
import PropTypes from 'prop-types';

function Card({title, svg, width, totalCount}) {
  return (
    <div  style={{ width: width }}>
      <div
        className="flex h-full flex-col rounded-lg border border-b-4 border-border-200 bg-white  md:p-6"
        style={{ borderBottomColor: 'rgb(30, 174, 152)' }}
      >
        <div className="mb-auto flex w-full items-center justify-between">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-gray-100/80">
            {svg}
          </div>
          <div className="flex w-full flex-col text-end">
            <span className="mb-1 text-base font-normal text-body">{title}</span>
            <span className="mb-2 text-2xl font-semibold text-heading">{totalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  svg: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired, 
};

export default Card;
