import React from 'react'


import Navbar from '../../components/Navbar/Navbar'
import PortfolioPage from '../../components/Portfolio/PortfolioPage'
import ToastProvider from '../../components/Common/ToastProvider'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <PortfolioPage/>
      <ToastProvider/>
    </div>
  )
}

export default Dashboard
