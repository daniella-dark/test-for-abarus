import React from 'react'
import { useSelector } from 'react-redux'
import { postsDataSelector } from '../../redux/posts/selectors'

import styles from './PostsTable.module.scss'
import { useAppDispatch } from '../../redux/store'
import { fetchPosts } from '../../redux/posts/asyncActions'
import { IPostItem } from '../../redux/posts/types'
import Pagination from '../Pagination'
import { filterSelector } from '../../redux/filter/selectors'
import { TSortItem } from '../../redux/filter/types'
import TableHeaderItem from './TableHeaderItem'

const sortList: TSortItem[] = [
    { name: 'ID', sortProperty: 'id' },
    { name: 'Заголовок', sortProperty: 'title' },
    { name: 'Описание', sortProperty: 'body' },
]

const PostsTable: React.FC = () => {
    const { items } = useSelector(postsDataSelector)
    const { searchValue, activePage, sortType } = useSelector(filterSelector)
    const dispatch = useAppDispatch()

    const [toggleSort, setToggleSort] = React.useState<string>('asc')

    const itemsLimit = 10

    React.useEffect(() => {        
        dispatch(fetchPosts())
    }, [dispatch])

    // сортировка постов по заголовку (id | title | body) и возрастанию/убыванию и фильтрация на основании значения, введенного в поисковой строке
    const sortedAndSearchedPosts = () => {
        let itemsCopy = [...items]
        itemsCopy = itemsCopy
            .sort((post1, post2) =>
                sortType === 'id'
                    ? post1[sortType] - post2[sortType]
                    : post1[sortType]?.localeCompare(post2[sortType])
            )
            .filter((post: IPostItem) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
        return toggleSort === 'desc' ? itemsCopy.reverse() : itemsCopy
    }

    // получение общего количества постов с учетом сортировки и фильтрации для формирования пагинации
    let totalCount = sortedAndSearchedPosts().length

    return (
      <div>
        <table className={styles.root}>
            <tbody>
                <tr className={styles.header}>
                    {
                        sortList.map((type: TSortItem) =>
                            <TableHeaderItem
                                key={type.sortProperty}
                                type={type}
                                toggleSort={toggleSort}
                                setToggleSort={setToggleSort}
                            />
                        )
                    }
                </tr>            
                {
                    // постраничный рендер постов
                    sortedAndSearchedPosts()
                        .slice((activePage - 1) * itemsLimit, activePage * itemsLimit)
                        .map((post: IPostItem) => 
                            <tr key={post.id}>
                                <td style={{textAlign: 'center'}}>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                }
            </tbody>
        </table>
        <Pagination 
            totalCount={totalCount}
            itemsLimit={itemsLimit}
            activePage={activePage}
        />
      </div>
  )
}

export default PostsTable
