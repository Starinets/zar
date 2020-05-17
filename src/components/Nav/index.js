import React from 'react'
import s from './style.module.scss'

const Head = ({ children }) => {
  return (
      <nav>
        <ul className={s.ul}>
          {children}
        </ul>
      </nav>
  )
}

export default Head;
