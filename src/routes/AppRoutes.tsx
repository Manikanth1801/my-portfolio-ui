import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeMap } from '../utils/constants'

const AppRoutes = () => {
  return (
   <>
   <Routes>
    {
        routeMap?.map((route, index) => (
            <>
            <Route key={index} path={route.URL} element={<route.element />} />
            </>
        ))
    }
   </Routes>
   </>
  )
}

export default AppRoutes