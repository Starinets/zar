import React from 'react'
import s from './style.module.scss'

const Head = ({ title }) => {
  return (
    <li className={s.li}>{title}</li>
  )
}

export default Head;
