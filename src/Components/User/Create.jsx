import React,{useContext} from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { UserContext } from '../../Context/UserContext';
const Create = () => {
  const UserData = useContext(UserContext);
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          website: ''
        }}
        onSubmit={values => {
          UserData.OnCreateUser(values)
        }}
        // validate={values => {
        //   const errors = {}

        //   if (!values.name) {
        //     errors.name = 'Name is Required'
        //   }
        //   if (!values.username) {
        //     errors.username = 'LastName is Required'
        //   }
        //   if (!values.email) {
        //     errors.email = 'Email is Required'
        //   }
        //   if (!values.website) {
        //     errors.website = 'WebSite is Required'
        //   }

        //   return errors
        // }}

        validationSchema={yup.object({
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
        })}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <div className='card  m-2'>
            <div className='card-header'>
              <h1>New User</h1>
            </div>
            <div className='card-body'>
              <div className='container'>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          name='name'
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder='Enter Name'
                        />
                        {errors.name && touched ? (
                          <small
                            id='emailHelp'
                            className='form-text text-danger'
                          >
                            {errors.name}
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
                          name='username'
                          value={values.username}
                          onChange={handleChange}
                          placeholder='username'
                        />
                        {errors.username && touched ? (
                          <small
                            id='emailHelp'
                            className='form-text text-danger'
                          >
                            {errors.username}
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
                          value={values.email}
                          onChange={handleChange}
                          placeholder='email'
                        />
                        {errors.email && touched ? (
                          <small
                            id='emailHelp'
                            className='form-text text-danger'
                          >
                            {errors.email}
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
                          value={values.website}
                          onChange={handleChange}
                          placeholder='website'
                        />
                        {errors.website && touched ? (
                          <small
                            id='emailHelp'
                            className='form-text text-danger'
                          >
                            {errors.website}
                          </small>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <button type='submit' className='btn btn-primary m-1'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}

export default Create
