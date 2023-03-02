import React from 'react'
import ArrowIcon from '../../assets/img/ArrowIcon'
import { TSortItem } from '../../redux/filter/types'
import { setSortType } from '../../redux/filter/slice'
import { useSelector, useDispatch } from 'react-redux'

import styles from './PostsTable.module.scss'
import { filterSelector } from '../../redux/filter/selectors'

type TTableHeaderProps = {
    type: TSortItem;
    toggleSort: string
    setToggleSort: (value: string) => void
}

const TableHeaderItem: React.FC<TTableHeaderProps> = ({ type, toggleSort, setToggleSort }) => {
    const dispatch = useDispatch()
    const { sortType } = useSelector(filterSelector)

    const sortEvent = () => {
        dispatch(setSortType(type.sortProperty));
        setToggleSort(toggleSort === 'asc' ? 'desc' : 'asc')
    }
    
    return (
        <th
            onClick={sortEvent}
        >
            <div className={`${styles.text} ${sortType === type.sortProperty ? styles.active : ''}`}>
                <p>{type.name}</p>
                <ArrowIcon />
            </div>
        </th>
    )
}

export default TableHeaderItem
