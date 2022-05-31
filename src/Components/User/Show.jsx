import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { USERS_URL } from '../../utilities/Url'
const Show = () => {
  const [user, setUsers] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getUser = async () => {
      const getdata = await axios.get(USERS_URL + `/${id}`)
      setUsers(getdata.data)
    }
    getUser()
  }, [])

  console.log(user);
  return (
    <div className='container m-2'>
      <div className='card'>
        <div className='card-header'>
          <h4>
            {user.name} {user.username}
          </h4>
        </div>
        <div className='card-body'>
          <p>
            Email : {user.email}
          </p>
            <p>
            webSite : {user.website}
          </p>
            
        </div>
      </div>
    </div>
  )
}

export default Show
