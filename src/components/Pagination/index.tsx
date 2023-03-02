import React from 'react'
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../redux/filter/slice';

import styles from './Pagination.module.scss'

type TPaginationProps = {
  activePage: number;
  totalCount: number;
  itemsLimit: number;
}

const Pagination: React.FC<TPaginationProps> = ({totalCount, itemsLimit, activePage}) => {
    const dispatch = useDispatch()
    const pageCount = Math.ceil(totalCount / itemsLimit)

  return (
    <div className={styles.root}>
        <button
            onClick={() => dispatch(setActivePage(activePage - 1))}
            disabled={activePage === 1}
        >
            Назад
        </button>
        <ul>
            {
                [...Array(pageCount)].map((_, index) =>
                    <li
                        key={index}
                        className={activePage === index + 1 ? styles.active : ''}
                        onClick={() => dispatch(setActivePage(index + 1))}
                    >
                        {index + 1}
                    </li>
                ) 
            }
        </ul>
        <button
            onClick={() => dispatch(setActivePage(activePage + 1))}
            disabled={activePage === pageCount}
        >
            Вперед
        </button>
    </div>
  )
}

export default Pagination