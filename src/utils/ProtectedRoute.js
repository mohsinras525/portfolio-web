import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = ({children,...rest}) => {
    let user = localStorage.getItem('user')
    user =  JSON.parse(user)
    return ( user?.success ? <Outlet/>:<Navigate to='/login'/>)
}

export default ProtectedRoute