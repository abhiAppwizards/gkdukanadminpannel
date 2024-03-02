import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'
import config from 'src/config'
import { useNavigate, useParams } from 'react-router-dom'
import { CFormInput } from '@coreui/react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const EditProduct = () => {
  const [product, setProduct] = useState([])
  const token = localStorage.getItem('vendorToken')
  const params = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [taxSlab, setTaxSlab] = useState()
  const [status, setStatus] = useState()
  const [advertisingStatus, setAdvertisingStatus] = useState()
  const [loading, setLoading] = useState()


  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.put(
        `${config.baseURL}/vendor/product/products/${params.id}`,
        {
          title,
          description,
        },
        {
          headers: {
            authorization: token,
          },
        },
      )
      console.log(response.data) 
      setLoading(false)
      navigate('/products/all')            
    } catch (error) {
      console.error('Error while adding product:', error)
      setLoading(false)
    }
  }

  const handleChange = (e, setter) => {
    setter(e.target.value)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${config.baseURL}/vendor/product/products/${params.id}`, {
          headers: {
            authorization: token,
          },
        })
        const data = await response.json()
        console.log(data)
        setTitle(product.title)
        setTaxSlab(product.tax_slab)
        setStatus(product.status)
        setAdvertisingStatus(product.advertising_status)
        setDescription(product.description)
        setProduct(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    if (params.id) {
      fetchProducts()
    }
  }, [params.id])

  return (
    <CRow>
      <CCol>
        <CCard className='p-4'>
          <Form.Group key="product._id">
            <div className="mt-7">
              <div className="d-flex justify-content-between">
                <div className="d-inline-block mb-3">
                  <span style={{ display: 'block' }}>
                    Title<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    value={product.title}
                    onChange={(e) => handleChange(e, setTitle)}
                    style={{ width: '350px' }}
                    type="text"
                  />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    description<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    onChange={(e) => handleChange(e, setDescription)}
                    style={{ width: '350px' }}
                    value={description}
                    type="text"
                  />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    Vendor Id<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput value={product.vendor_id}style={{ width: '350px' }} type="text" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-inline-block mb-3">
                  <span style={{ display: 'block' }}>
                    Tax Slab<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    onChange={(e) => handleChange(e, setTaxSlab)}
                    style={{ width: '350px' }}
                    value={taxSlab}
                    type="text"
                  />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    Status<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    onChange={(e) => handleChange(e, setStatus)}
                    style={{ width: '350px' }}
                    value={status}
                    disabled
                    type="text"
                  />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    Advertising Status<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput
                    onChange={(e) => handleChange(e, setAdvertisingStatus)}
                    style={{ width: '350px' }}
                    value={advertisingStatus}
                    disabled
                    type="text"
                  />
                </div>
              </div>
            </div>
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
          </Form.Group>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditProduct
