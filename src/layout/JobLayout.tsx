import React from 'react'
import { Outlet } from 'react-router'

const JobLayout = () => {
  return (
    <div>
        <h2>Job Openings</h2>
        <p>List of current job opening in our campany.</p>
        <Outlet/>
        </div>
  )
}

export default JobLayout