import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { UserContainer } from '../User/UserContainer.jsx';
import { formatDate, formatSum, inflect, parseLocationSearch } from '../../utils.js';
import { UIDropdown } from '../UI/UIDropdown.jsx';
import './ProgramList.scss';


export function ProgramList(){
  const [programs, setPrograms] = useState([]);
  const [currentSort, setCurrentSort] = useState(undefined);
  const location = useLocation();

  const sortOptions = [
    { value: 'sort1', title: 'Company name (A-Z)', linkTo: '/programs?sort=sort1' },
    { value: 'sort2', title: 'Company name (Z-A)', linkTo: '/programs?sort=sort2' },
    { value: 'sort3', title: 'Type (A-Z)', linkTo: '/programs?sort=sort3' },
    { value: 'sort4', title: 'Type (Z-A)', linkTo: '/programs?sort=sort4' },
    { value: null, title: 'Budget (Ascending-Descending)', linkTo: '/programs' },
    { value: 'sort6', title: 'Budget (Descending-Ascending)', linkTo: '/programs?sort=sort6' },
    { value: 'sort7', title: 'Expiration date (Soonest - Latest)', linkTo: '/programs?sort=sort7' },
    { value: 'sort8', title: 'Expiration date (Latest - Soonest)', linkTo: '/programs?sort=sort8' },
  ];

  useEffect(() => {
    const currentSortValue = parseLocationSearch(location.search).sort || null;
    const currentSortOption = sortOptions.find(option => option.value === currentSortValue);
    setCurrentSort(currentSortOption);

    fetchPrograms().then(setPrograms);
  }, [location]);

  function fetchPrograms(){
    return fetch('/__MOCK/programs.json')
      .then(res => res.json())
      .then(programs => {
        window.__programs = programs;
        return programs.sort(() => Math.random() - 0.5);
      });
  }

  return (
    <UserContainer>
      <div className="Programs">
        <div className="Global__app-content-max-width">

          <div className="Programs__header">
            <div className="Programs__header-inner">
              <h2 className="Programs__header-title">Programs</h2>
              <div className="Programs__header-actions">
                <Link className="UIButton UIButton--green" to="/programs/create">Create New Program</Link>
              </div>
            </div>
          </div>

          <ul className="my-5 py-3" hidden>
            <li>
              <Link to="/programs/CBB7755098">Program CBB7755098</Link>
            </li>
            <li>
              <Link to="/programs/CBB7755777">Program CBB7755777</Link>
            </li>
            <li>
              <Link to="/programs/bookmarked">ProgramList bookmarked</Link>
            </li>
            <li>
              <Link to="/programs/create">ProgramList create</Link>
            </li>
            <li>
              <Link to="/programs/CBB7755777/submit-bug">Submit bug to CBB7755777</Link>
            </li>
          </ul>

          <div className="Programs__tabs">
            <NavLink className="Programs__tabs-item UIButton" to="/programs" end>All ProgramList</NavLink>
            <NavLink className="Programs__tabs-item UIButton" to="/programs/bookmarked">Bookmarks</NavLink>
          </div>

          <div className="Programs__toolbar">
            <div className="Programs__toolbar-search">
              <input className="Programs__toolbar-search-input UIInput" type="search" placeholder="Search for programs"/>
            </div>
            <UIDropdown
              className="Programs__toolbar-sort"
              title={currentSort?.title}
              items={sortOptions}
              selectedItem={currentSort}
            />
            <button className="Programs__toolbar-filters UIButton">Filters</button>
          </div>

          <div className="Programs__count">
            {inflect(programs.length, ['program', 'programs'])} available
          </div>

          <ul className="Programs__list">
            {programs.map(program => (
              <li key={program.public_id} className={cn({
                'Programs__item': true,
                'Programs__item--bookmarked': program.is_bookmarked,
              })}>
                <span className="Programs__item-inner">
                  <Link className="Programs__item-link" to={'/programs/' + program.public_id}/>

                  <div className="Programs__item-logo">
                    <img
                      className="Programs__item-logo-img"
                      src={program.logo}
                      alt={program.company_name}
                      width="72"
                      height="72"/>
                  </div>

                  <div className="Programs__item-content">
                    <div className="Programs__item-primary">
                      <div className="Programs__item-info">
                        <h3 className="Programs__item-title">
                          {program.company_name}
                          <span className="Programs__item-title-reward">{formatSum(program.reward)}</span>
                        </h3>
                        <div className="Programs__item-description">
                          {program.program_name}
                        </div>
                      </div>
                      <Link className="Programs__item-cta UIButton UIButton--green"
                        to={'/programs/' + program.public_id + '/submit-bug'}>
                        Submit a bug
                      </Link>
                    </div>

                    <ul className="Programs__item-secondary">
                      <li className="Programs__item-secondary-item me-auto">
                        <span className="Programs__item-secondary-title">Type</span>
                        {program.type.join(', ')}
                      </li>
                      <li className="Programs__item-secondary-item">
                        <span className="Programs__item-secondary-title">Participating experts</span>
                        {program.participating_experts}
                      </li>
                      <li className="Programs__item-secondary-item">
                        <span className="Programs__item-secondary-title">Last updated</span>
                        {formatDate(program.last_updated)}
                      </li>
                      <li className="Programs__item-secondary-item">
                        <span className="Programs__item-secondary-title">Expiration date</span>
                        {formatDate(program.expiration_date)}
                      </li>
                    </ul>
                  </div>

                  <div className="Programs__item-actions">
                    <Link className="Programs__item-actions-item Programs__item-actions-item--view"
                      to={'/programs/' + program.public_id}
                      title="View program">
                      View
                    </Link>
                    <span className="Programs__item-actions-item Programs__item-actions-item--upvote"
                      title="Upvote program"
                      tabIndex={0}>
                      Upvote
                    </span>
                    <span className="Programs__item-actions-item Programs__item-actions-item--bookmark"
                      title={program.is_bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
                      tabIndex={0}>
                      Bookmark
                    </span>
                  </div>
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </UserContainer>
  );
}
