import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Link } from 'react-router-dom'

const UserList = () => {
  const usersData = useContext(UserContext)

  return (
    <>
      <tbody>
        {usersData.filterd.length!=0 ?usersData.filterd.map(({ id, name, username, email, website }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{website}</td>
            <td>
              <Link className='btn btn-primary' to={`/Users/${id}`}>
                Show
              </Link>
            </td>
            <td>
              <button
                className='btn btn-danger'
                onClick={() => usersData.OnDeleteUser(id)}
              >
                Delete
              </button>
            </td>
            <td>
              <Link className='btn btn-primary' to={`/Users/Update/${id}`}>
                Update
              </Link>
            </td>
          </tr>
        )) : 
        <tr>
          <h1>یافت نشد</h1>

        </tr>
        }
      </tbody>
    </>
  )
}

export default UserList
