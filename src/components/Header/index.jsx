import React from 'react'

import style from './style.module.scss';

const PageHeader = ({title}) => {
  return (
    <div className={style.headerContainer}>
        <h1>{title || 'Journey'}</h1>
    </div>
  )
}

export default PageHeader