import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import Select from 'react-select'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { CSpinner } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { CFormInput } from '@coreui/react'
import DropDown from '../productComponent/Dropdown'
import config from 'src/config'
import axios from 'axios'

function AddSingleProduct() {
  const [levelOneCategory, setLevelOneCategory] = useState('')
  const [levelTwoCategory, setLevelTwoCategory] = useState('')
  const [levelThreeCategory, setLevelThreeCategory] = useState('')
  const [levelFourCategory, setLevelFourCategory] = useState('')

  const token = localStorage.getItem('vendorToken')

  const vehicles = [
    {
      category: 'Fourwheeler',
      subcategories: [
        {
          name: 'Car',
          subsubcategories: [{ name: 'SUV' }, { name: 'Sedan' }],
        },
        {
          name: 'Truck',
          subsubcategories: [{ name: 'Pickup' }, { name: 'Semi-truck' }],
        },
      ],
    },
    {
      category: 'Twowheeler',
      subcategories: [
        { name: 'Bike', subsubcategories: [{ name: 'Sports Bike' }, { name: 'Cruiser' }] },
        {
          name: 'Scooter',
          subsubcategories: [{ name: 'Electric Scooter' }, { name: 'Gas Scooter' }],
        },
      ],
    },
    {
      category: 'Other',
      subcategories: [
        { name: 'Boat', subsubcategories: [{ name: 'Speedboat' }, { name: 'Sailboat' }] },
        { name: 'Plane', subsubcategories: [{ name: 'Jet' }, { name: 'Propeller' }] },
      ],
    },
  ]

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  //image set code
  const [images, setImages] = useState([])
  const handleFileUpload = (e) => {
    const uploadedImages = Array.from(e.target.files)
    setImages((prevImages) => [...prevImages, ...uploadedImages])
  }

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((image, i) => i !== index))
  }

  /****************** //image set code end***************** */
  const categories = vehicles.map((vehicle) => vehicle.category)
  const subcategories =
    vehicles
      .find((vehicle) => vehicle.category === levelOneCategory)
      ?.subcategories.map((subcategory) => subcategory.name) || []
  const subsubcategories =
    vehicles
      .find((vehicle) => vehicle.category === levelOneCategory)
      ?.subcategories.find((subcategory) => subcategory.name === levelTwoCategory)
      ?.subsubcategories.map((subsubcategory) => subsubcategory.name) || []

  const handleCategoryChange = (category) => {
    setLevelOneCategory(category)
    setLevelTwoCategory('')
    setLevelThreeCategory('')
  }

  const handleSubcategoryChange = (subcategory) => {
    setLevelTwoCategory(subcategory)
    setLevelThreeCategory('')
  }

  const handleSubsubcategoryChange = (subsubcategory) => {
    setLevelThreeCategory(subsubcategory)
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post(
        `${config.baseURL}/vendor/catalog`,
        {
          name: 'Sample Catalog',
          levelOneCategory_id: '65dc7730f99d505da75201f8',
          levelTwoCategory_id: '65dc7730f99d505da75201f8',
          levelThreeCategory_id: '65dc7730f99d505da75201f8',
          levelFourCategory_id: '65dc7730f99d505da75201f8',
          full_details: 'Sample details of the catalog',
          image: 'sample-image-url',
          valid: true,
          tags: ['tag1', 'tag2'],
          gray_tags: ['gray-tag1', 'gray-tag2'],
          value_prop_tag: {
            name: 'Value Prop Tag',
          },
          ad: {
            active: true,
            tag: 'Sample Ad Tag',
          },
          product_id: '65dd7a1573f60f44752155dd',
          vendor_id: '65d4859fca3eb9522c116037',
        },
        {
          headers: {
            authorization: token,
          },
        },
      )
      console.log(response.data) 
      setLoading(false)
      // toast.success('Product added successfully');
      navigate('/products/all') ///add/single/product
    } catch (error) {
      console.error('Error while adding product:', error)
      setLoading(false)
      // toast.error('Error while adding product');
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {/* <Form> */}
          <Form.Group>
            <Form.Label>Select a category:</Form.Label>
            <DropDown
              label={'Filter by Product Type'}
              optionsData={categories}
              value={levelOneCategory}
              onChange={handleCategoryChange}
            />
            {levelOneCategory && (
              <DropDown
                label={'Filter by Product Type'}
                optionsData={subcategories}
                value={levelTwoCategory}
                onChange={handleSubcategoryChange}
              />
            )}
            {levelTwoCategory && (
              <DropDown
                label={'Filter by Product Type'}
                optionsData={subsubcategories}
                value={levelThreeCategory}
                onChange={handleSubsubcategoryChange}
              />
            )}
            {/* Image */}
            {levelThreeCategory && (
              <div className="file-upload mt-3 d-flex justify-content-center axlign-items-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col md={8}>
                      <Form.Label className="text-center mb-3">Upload a file:</Form.Label>
                      <div className="input-group">
                        <div className="border p-3 ">
                          <div className="text-center">
                            <FontAwesomeIcon icon={faCloudUploadAlt} size="4x" />
                          </div>
                          <div className="text-center my-3">
                            <label htmlFor="file-upload" className="btn btn-primary">
                              Choose File
                            </label>
                            <input
                              id="file-upload"
                              type="file"
                              multiple
                              onChange={handleFileUpload}
                              style={{ display: 'none' }}
                            />
                          </div>
                          {images.length > 0 && (
                            <div>
                              <h5 className="text-center">Uploaded Images:</h5>
                              <Row>
                                {images.map((image, index) => (
                                  <Col key={index} md={3} sm={6} className="mb-3">
                                    <div className="position-relative">
                                      <button
                                        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1"
                                        onClick={() => handleImageDelete(index)}
                                      >
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                      </button>
                                      <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Uploaded ${index}`}
                                        className="img-fluid"
                                      />
                                    </div>
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
            <div className="mt-7">
              <div className="d-flex justify-content-between">
                <div className="d-inline-block mb-3">
                  <span style={{ display: 'block' }}>
                    Title<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput style={{ width: '350px' }} type="text" />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    description<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput style={{ width: '350px' }} type="text" />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    Vendor Id<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput style={{ width: '350px' }} type="text" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-inline-block mb-3">
                  <span style={{ display: 'block' }}>
                    Tax Slab<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput style={{ width: '350px' }} type="text" />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    Status<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput style={{ width: '350px' }} type="text" />
                </div>
                <div className="d-inline-block">
                  <span style={{ display: 'block' }}>
                    Advertising Status<span style={{ color: 'red' }}>*</span>
                  </span>
                  <CFormInput style={{ width: '350px' }} type="text" />
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
          {/* </Form> */}
        </Col>
      </Row>
    </Container>
  )
}

export default AddSingleProduct
