import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/posts'} element={<Home />} />
      <Route path={'*'} element={<Navigate to="/posts" replace={true} />} />
    </Routes>
  )
}

export default AppRouter
