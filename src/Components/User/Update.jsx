import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import { USERS_URL } from '../../utilities/Url'
import * as yup from 'yup'
import { UserContext } from '../../Context/UserContext'
const Update = () => {
  const [User, setUser] = useState([])
  const UserContextData = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    const FetchData = async () => {
      const getdata = await axios.get(USERS_URL + `/${id}`)
      setUser(getdata.data)
    }
    FetchData()
  }, [])

  const formik = useFormik({
    initialValues: {
      id:id,
      name: User.name,
      username: User.username,
      email: User.email,
      website: User.website
    },
    validationSchema: yup.object({
      name: yup.string().required('لطفا نام را وارد کنید'),
      username: yup.string().required('لطفا نام خانوادگی را وارد کنید'),
      email: yup
        .string()
        .email('ایمیل نا معتبر است')
        .max(255)
        .required('لطفا ایمیل را وارد کنید'),
      website: yup
        .string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'آدرس اشتباه است!'
        )
        .required('لطفا وب سایت را وارد کنید')
    }),
    enableReinitialize: true,
    onSubmit: values => {
      UserContextData.OnUpdateUser(values)
    }
  })

  return (
    <div className='container'>
      <div className='card  m-2'>
        <div className='card-header'>
          <h1>
            Update {User.name} {User.username}
          </h1>
        </div>
        <div className='card-body'>
          <div className='container'>
            <form onSubmit={formik.handleSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <small id='emailHelp' className='form-text text-danger'>
                        {formik.errors.name}
                      </small>
                    ) : null}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      {...formik.getFieldProps('username')}
                    />
                    {formik.errors.username && formik.touched.username ? (
                      <small id='emailHelp' className='form-text text-danger'>
                        {formik.errors.username}
                      </small>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='Email'>Email</label>
                    <input
                      type='text'
                      className='form-control'
                      id='Email'
                      name='email'
                      {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <small id='emailHelp' className='form-text text-danger'>
                        {formik.errors.email}
                      </small>
                    ) : null}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='WebSite'>WebSite</label>
                    <input
                      type='text'
                      className='form-control'
                      id='WebSite'
                      name='website'
                      {...formik.getFieldProps('website')}
                    />
                    {formik.errors.website && formik.touched.website ? (
                      <small id='emailHelp' className='form-text text-danger'>
                        {formik.errors.website}
                      </small>
                    ) : null}
                  </div>
                </div>
              </div>

              <button type='submit' className='btn btn-success m-1'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update
