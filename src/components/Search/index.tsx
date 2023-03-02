import React from 'react'
import SearchImg from '../../assets/img/SearchImg'
import { setSearchValue } from '../../redux/filter/slice'
import { useDispatch } from 'react-redux';

import styles from './Search.module.scss'

const Search: React.FC = () => {
  const dispatch = useDispatch()

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value))
  }

  return (
    <div className={styles.root}>
      <input onChange={onChangeInput} type="text" placeholder='Поиск'/>
      <SearchImg />
    </div>
  )
}

export default Search
