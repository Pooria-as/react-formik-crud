import React from 'react'
import { useFormik } from 'formik'

import * as Yup from 'yup'
const TestForm = () => {
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('please enter the name')
    }),
    onSubmit: values => console.log(values)
  })

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            {...formik.getFieldProps("name")}
            // value={formik.values.name}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            id='name'
            placeholder='Enter name'
          />
          {formik.errors.name && formik.touched.name ? (
            <small id='emailHelp' className='form-text text-danger'>
              {formik.errors.name}
            </small>
          ) : null}
        </div>

        <button type='submit' className='btn btn-primary m-1'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default TestForm
