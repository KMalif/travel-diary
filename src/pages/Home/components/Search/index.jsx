import React from 'react'

import style from './style.module.scss';

const SearchField = () => {
  return (
    <div className={style.searchContainer}>
        <input type="search" placeholder="Find Journey" aria-label="Search" />
        <button className={style.buttonSearch}>Search</button>
    </div>
  )
}

export default SearchField