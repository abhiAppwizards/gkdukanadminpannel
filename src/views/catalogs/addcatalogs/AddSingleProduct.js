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
import DropDown from '../catalogcomponent/Dropdown'

function AddSingleProduct() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [selectedSubsubcategory, setSelectedSubsubcategory] = useState('')

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
      .find((vehicle) => vehicle.category === selectedCategory)
      ?.subcategories.map((subcategory) => subcategory.name) || []
  const subsubcategories =
    vehicles
      .find((vehicle) => vehicle.category === selectedCategory)
      ?.subcategories.find((subcategory) => subcategory.name === selectedSubcategory)
      ?.subsubcategories.map((subsubcategory) => subsubcategory.name) || []

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setSelectedSubcategory('')
    setSelectedSubsubcategory('')
  }

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory)
    setSelectedSubsubcategory('')
  }

  const handleSubsubcategoryChange = (subsubcategory) => {
    setSelectedSubsubcategory(subsubcategory)
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/catalogs/add/single/catalog')
    }, 3000)
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
              value={selectedCategory}
              onChange={handleCategoryChange}
            />
            {selectedCategory && (
              <DropDown
                label={'Filter by Product Type'}
                optionsData={subcategories}
                value={selectedSubcategory}
                onChange={handleSubcategoryChange}
              />
            )}
            {selectedSubcategory && (
              <DropDown
                label={'Filter by Product Type'}
                optionsData={subsubcategories}
                value={selectedSubsubcategory}
                onChange={handleSubsubcategoryChange}
              />
            )}
            {/* Image */}
            {selectedSubsubcategory && (
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
