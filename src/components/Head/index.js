import React from 'react'
import s from './style.module.scss'

const Head = ({ fixed = false, children }) => {
  return (
    <div className={s.header + ' ' + (fixed && s.fixed)}>
      {children}
    </div>
  )
}

export default Head;
