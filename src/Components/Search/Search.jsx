import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

const Search = () => {
  const UserContextData = useContext(UserContext)
  return (
    <div className='container'>
      <input
        className='form-control  m-1'
        placeholder='Search user'
        onChange={(e) => UserContextData.OnSearchUser(e.target.value)}
      />
    </div>
  )
}

export default Search
