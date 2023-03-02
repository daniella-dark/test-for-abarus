import React from 'react'
import PostsTable from '../components/PostsTable'
import Search from '../components/Search'

const Home: React.FC = () => {
  return (
    <div>
      <Search />
      <PostsTable />
    </div>
  )
}

export default Home
