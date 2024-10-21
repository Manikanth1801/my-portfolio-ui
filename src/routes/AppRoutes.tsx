import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routeMap } from '../utils/constants'
import { GlobalContext } from '../context/GlobalProvider';
import HomePage from '../pages/home/HomePage';

const AppRoutes = () => {
    const { authToken } = useContext(GlobalContext);

  return (
   <>
 <Routes>
            {routeMap.map((route) => {
                const Element = route.element;
                if (route.isProtected) {
                    return (
                        <Route
                            key={route.__id}
                            path={route.URL}
                            element={authToken ? <Element /> : <Navigate to="/login" replace />}
                        />
                    );
                } else {
                    return <Route key={route.__id} path={route.URL} element={<Element />} />;
                }
            })}
        </Routes>
   </>
  )
}

export default AppRoutes