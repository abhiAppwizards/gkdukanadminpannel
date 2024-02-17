import React, { useEffect } from 'react'
import './styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form} from 'react-bootstrap'
import Select from 'react-select'
import axios from 'axios';

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


function AllOrders() {

    const [selectedValues, setSelectedValues] = useState({ category: null })
    const [allOrders, setAllOrders] = useState([])
  
    const handleCategoryChange = (selectedOption) => {
      setSelectedValues({
        category: selectedOption,
        subcategory: null,
        subsubcategory: null,
      })
    }


    useEffect(()=>{
      getAllOrders()
    },[])

    const getAllOrders = () =>{
      // try {
      //   // const response = axios.get()
      //   console.log('allorders',response)
      //   setAllOrders(response)
      // } catch (err) {
      //   console.log("error", err);
      //   if (err.response && err.response.data && err.response.data.error) {
      //     toast.error(err.response.data.error);
      //   } else {
      //     toast.error("An error occurred. Please try again.");
      //   }
      // }
    };
  
    // Function to truncate text
    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'
      }
      return text
    }
  return (
    <div className="">
      <ToastContainer />
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
      </div>
      <h2 className="fw-dark fs-4">Your Orders</h2>
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
            <td>pending...</td>
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
              modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg
              modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg
              modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg
            </td>
            <td>img</td>
            <td>13000</td>
            <td>Cancelled</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AllOrders;
