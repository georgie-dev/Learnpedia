import React from 'react'

import { Header, Sidebar } from './components'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div >
    <div className="flex relative dark:bg-main-dark-bg">
    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-50">
        <Sidebar/>
    </div>
    <div  
    className='min-h-screen md:ml-64 w-full  '
      >
        <div className='relative  md:static  dark:bg-main-dark-bg navbar w-full'>
            <Header/>
        </div>
        <div >
          <Outlet/>
        </div>
        {/* <div className='p-12 dark:bg-main-dark-bg'>
      <Footer/>
    </div> */}
    </div>
    </div>
</div>
  )
}

export default App