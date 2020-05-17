import React from 'react'
import s from './style.module.scss'

const Main = ({ children }) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  )
}

export default Main;
