import React, { useEffect, useState } from 'react'
import { CFormInput, CSpinner } from '@coreui/react'
import { Form, Button } from 'react-bootstrap'
import config from 'src/config'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

function Address() {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState('')
  const [formData, setFormData] = useState({
    address_line_1: '',
    state: '',
    pin_code: '',
    country: '',
    phone: '',
    city: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const navigate = useNavigate()

  const token = localStorage.getItem('vendorToken')

  const handleShow = () => {
    setShow(!show)
  }

  useEffect(() => {
    setLoading(true)
    getAddress()
  }, [])

  const getAddress = async () => {
    try {
      const response = await axios.get(`${config.baseURL}/vendor/settings/addresses`, {
        headers: {
          authorization: token,
        },
      })
      // console.log(response.data)
      setAddress(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error while adding product:', error)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post(
        `${config.baseURL}/vendor/settings/addresses`,
        {
          address_line_1: formData.address_line_1,
          state: formData.state,
          pin_code: formData.pin_code,
          country: formData.country,
          phone: formData.phone,
          vendor_id: '65ce086a43648af9cc83e96e',
          city: formData.city,
        },
        {
          headers: {
            authorization: token,
          },
        },
      )
      console.log(response.data)
      setLoading(false)
      toast.success('Address added successfully')
        navigate('/details/address')
    } catch (error) {
      //   console.error('Error while adding product:', error)
      toast.error(error.response.data.message)
      setTimeout(() => {
        setLoading(false)
      }, 7000)
    }
  }
  return (
    <>
      {loading ? <CSpinner className='text-blue-600' /> : <div>
        <ToastContainer />
        <div className="rounded bg-white p-4 shadow md:p-8 mb-8 flex flex-row items-center justify-between">
          <div className="md:w-1/4">
            <h2 className=" relative text-lg font-semibold text-heading ">Address</h2>
          </div>
          {address.length === 0 && (
            <div>
              <button
                onClick={handleShow}
                className="border p-2 rounded-md bg-slate-200 hover:bg-slate-100 font-normal"
              >
                Add your Address
              </button>
            </div>
          )}
        </div>
        {show && (
          <div className="rounded p-4 shadow md:p-8 mb-8 bg-white justify-between">
            <div className="mt-7">
              <div className="d-flex justify-between">
                <div className="d-inline-block mb-3">
                  <span style={{ display: 'block' }}>
                    Address<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    className="bg-white"
                    style={{ width: '350px' }}
                    type="text"
                    name="address_line_1"
                    value={formData.address_line_1}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    State<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    style={{ width: '350px' }}
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    Pin Code<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    style={{ width: '350px' }}
                    type="text"
                    name="pin_code"
                    value={formData.pin_code}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-inline-block mb-3">
                  <span style={{ display: 'block' }}>
                    Country<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    style={{ width: '350px' }}
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    Phone<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    style={{ width: '350px' }}
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    City<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    style={{ width: '350px' }}
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              {loading ? (
                <div className="mt-5">
                  <Button onClick={handleSubmit} disabled>
                    Submit
                  </Button>{' '}
                  {/* <CSpinner className="mt-5" type="border" color="primary" /> */}
                </div>
              ) : (
                <div className="mt-5">
                  <Button className="text-blue-500" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
        {address.length > 0 && (
          <div className="rounded p-4 shadow md:p-8 mb-8 bg-white justify-between">
            <div className="border w-full mt-4 p-2 rounded-md">
              <table className="table-auto ">
                <tbody className="">
                  <tr>
                    <td className="font-semibold pl-2 pr-32">Address :</td>
                    <td className="pl-4 ">{address[0].address_line_1}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pl-2 pr-32">State :</td>
                    <td className="pl-4 ">{address[0].state}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pl-2 pr-32">Pin Code :</td>
                    <td className="pl-4 ">{address[0].pin_code}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pl-2 pr-32">Country :</td>
                    <td className="pl-4 ">{address[0].country}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pl-2 pr-32">Phone :</td>
                    <td className="pl-4 ">{address[0].phone}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pl-2 pr-32">City :</td>
                    <td className="pl-4 ">{address[0].city}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="border p-1 w-24 rounded-md mt-4 bg-slate-200 hover:bg-slate-100 font-normal">
              Edit
            </button>
          </div>
        )}
      </div>}
    </>
  )
}

export default Address
