import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { USERS_URL } from '../utilities/Url'
import { toast } from 'react-toastify'
import swal from 'sweetalert'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [filterd, SetFilterd] = useState([])
  const [loading, setLodaing] = useState(false)
  useEffect(() => {
    const getUser = async () => {
      setLodaing(true)
      const getdata = await axios.get(USERS_URL)
      const data = getdata.data
      setUsers(data)
      SetFilterd(data)
      setLodaing(false)
    }
    getUser()
  }, [])

  const OnCreateUser = data => {
    setUsers([...users, data])
    axios.post(USERS_URL, data)
    toast('با موفقیت افزوده شد')
  }
  const OnDeleteUser = id => {
    const findData = users.filter(user => id !== user.id)
    const currectUser = users.find(user => id === user.id)
    console.log(currectUser)
    swal({
      title: 'آیا مطمن هستید?',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal('با موفقیت حذف شد', {
          icon: 'success'
        })
        axios.delete(USERS_URL + `/${currectUser.id}`)
        setUsers(findData)
      } else {
        swal('فایل شما حذف نشد')
      }
    })
  }
  const OnUpdateUser = data => {
    const UpdatedData = data
    axios.put(USERS_URL + `/${UpdatedData.id}`, UpdatedData)
    toast('با موفقیت ویرایش شد')
  }

  const OnSearchUser = key => {
    const filterUser = users.filter(user => {
      return user.name.toLowerCase().indexOf(key) > -1
    })
    SetFilterd(filterUser)
  }

  return (
    <>
      <UserContext.Provider
        value={{
          users,
          filterd,
          loading,
          OnCreateUser,
          OnDeleteUser,
          OnUpdateUser,
          OnSearchUser
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  )
}

export { UserProvider, UserContext }
