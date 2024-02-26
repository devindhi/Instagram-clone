import React from 'react'
import Home from './home'
import Notifications from './Notifications'
import Create
 from './Create'
import ProfileLink from './Profile'
import Search from './Search'

const SidebarItems = () => {
  return (
    <>
      <Home/>
      <Search/>
      <Notifications/>
      <Create/>
      <ProfileLink/>
    </>
  )
}

export default SidebarItems
