import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/posts/:page'} element={<Home />} />
      <Route path={'*'} element={<Navigate to="/posts/1" replace={true} />} />
    </Routes>
  )
}

export default AppRouter
