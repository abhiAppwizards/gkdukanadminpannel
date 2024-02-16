import React, { useState, useEffect } from 'react'
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import Select from 'react-select'
import { Container, Row, Col } from 'react-bootstrap'
import DropDown from './dropDown'

const optionsData = [
  {
    label: 'Category 1',
    subcategories: [
      {
        label: 'Subcategory 1.1',
        subsubcategories: [
          {
            label: 'Sub-subcategory 1.1.1',
            options: [
              { value: 'action', label: 'Action' },
              { value: 'another-action', label: 'ss action' },
            ],
          },
          {
            label: 'Sub-subcategory 1.1.2',
            options: [{ value: 'something-else', label: 'Something else here' }],
          },
        ],
      },
    ],
  },
  {
    label: 'Category 2',
    subcategories: [
      {
        label: 'Subcategory 2.1',
        subsubcategories: [
          {
            label: 'Sub-subcategory 2.1.1',
            options: [
              { value: 'option-1', label: 'Option 1' },
              { value: 'option-2', label: 'Option 2' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Category 3',
    subcategories: [
      {
        label: 'Subcategory 3.1',
        subsubcategories: [
          {
            label: 'Sub-subcategory 3.1.1',
            options: [
              { value: 'foo', label: 'Foo' },
              { value: 'bar', label: 'Bar' },
              { value: 'baz', label: 'Baz' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Category 4',
    subcategories: [
      {
        label: 'Subcategory 4.1',
        subsubcategories: [
          {
            label: 'Sub-subcategory 4.1.1',
            options: [
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
            ],
          },
        ],
      },
    ],
  },
]

function OrderCancelled() {
  const [loading, setLoading] = useState(false)
  const [selectedValues, setSelectedValues] = useState({
    category: null,
  })

  const handleCategoryChange = (selectedOption) => {
    setSelectedValues({
      category: selectedOption,
      subcategory: null,
      subsubcategory: null,
    })
  }

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
    }
    return text
  }

  const handleSubmit = () => {
    setLoading(true)
  }
  return (
    <>
      <Row>
        <Col>
          <DropDown optionsData={optionsData} label={'Filter By Name'} />
        </Col>
        <Col>
          <DropDown optionsData={optionsData} label={'Filter By Id'} />
        </Col>
        <Col>
          <DropDown optionsData={optionsData} label={'Filter By category'} />
        </Col>
        <Col>
          <DropDown optionsData={optionsData} label={'Filter By '} />
        </Col>
      </Row>

      <div>
        <Row className="mb-5 mt-3">
          <Col>
            <Form.Group>
              {/* <Form.Label>Search Pending Products</Form.Label> */}
              <Select
                value={selectedValues.category}
                onChange={handleCategoryChange}
                options={optionsData}
                isSearchable
                placeholder="Search..."
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: 'white',
                    color: 'black',
                  }),
                  control: (provided, state) => ({
                    ...provided,
                    // width: '150px',
                  }),
                  menu: (provided, state) => ({
                    ...provided,
                    // width: '150px',
                  }),
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="card">
              <div className="card-body">
                <div className="">
                  <h2 className="fw-dark fs-4">Pending Orders</h2>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Order ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Product image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>wwww2222222</td>
                        <td>iphone</td>
                        <td>modified</td>
                        <td>img</td>
                        <td>13000</td>
                        <td>pending..</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>wwww2222222</td>
                        <td>iphone</td>
                        <td>modified</td>
                        <td>img</td>
                        <td>13000</td>
                        <td>Delivered</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>wwww2222222</td>
                        <td>iphone</td>
                        <td>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{'Full description here'}</Tooltip>}
                          >
                            <span>{truncateText('modified egwgrgwrgg...', 20)}</span>
                          </OverlayTrigger>
                        </td>
                        <td>img</td>
                        <td>13000</td>
                        <td>Cancelled</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default OrderCancelled
