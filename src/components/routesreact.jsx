import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

export const Routesreact = () => {
  return (
    <div className='p-4'>
        <Routes>
          <Route exact path="/">
            <Navigate to="/search" />
          </Route>
          <Route exact path={['/search', '/images', '/news', '/videos']}>

          </Route>
        </Routes>
    </div>
  )
}
