import React from 'react';
import {NavLink} from 'react-router-dom';

// Consts
import {FILTERS} from '../modules/constants';

// modules
import {capitalize} from '../modules/helpers';

const Filter = (props) => {
  const filterList = Object.values(FILTERS)

  return (
    <div className="todo-filters text-right">
      <div
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Set a filter to show items"
      >
        {filterList
          .map((filter, i) => (
            <NavLink
              key={i}
              to={`/${filter}`}
              className="filter-btn btn btn-light"
              activeClassName="active"
            >
              {capitalize(filter)}
            </NavLink>))}
      </div>
    </div>
  )
};

export default Filter;
