import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import Search from '../Search/Search'
import UserList from './UserList'

const Index = () => {
  const UserData = useContext(UserContext)
  if (UserData.loading) {
    return (
      <div className='container d-flex justify-content-center align-items-center h-50'>
        <div className='spinner-border text-primary' role='status'></div>
      </div>
    )
  }
  return (
    <div className='container'>
      <h1>
        Users count: {UserData.users.length}
      </h1>
      <Search/>
      <table className='table table-bordered table-dark m-2'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>UserName</th>
            <th scope='col'>Email</th>
            <th scope='col'>WebSite</th>
            <th scope='col'></th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <UserList />
      </table>
    </div>
  )
}

export default Index
