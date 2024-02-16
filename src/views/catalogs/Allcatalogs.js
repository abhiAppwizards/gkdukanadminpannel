// VendorProductList.js
import config from 'src/config'
import './catalog_style.css'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FaTrash } from 'react-icons/fa'; 

const Allcatalogs = ({}) => {
  const [products, setProducts] = useState([])
  const [vendorId] = useState('65b8831c688c1f86adf4ed19')

  useEffect(() => {
    const token = localStorage.getItem('token')

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${config.baseURL}/vendors/${vendorId}/products`, {
          headers: {
            Authorization: token,
          },
        })
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [vendorId])

  const handleDelete = (index) => {
    console.log('Delete item at index:', index);
  };

  return (
    <div className="">
      <h2 className="fw-dark fs-4">Products</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product image</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product, index) => ( */}
          {/* <tr key={index}> */}
          <tr>
            {/* <td>{index + 1}</td>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.productDescription}</td>
              <td>{product.productImage}</td>
              <td>{product.price}</td>
            <tr key={index}> */}
            <td>1</td>
            <td>vfe</td>
            <td>fefe</td>
            <td>feff</td>
            <td>ffe</td>
            <td>fe</td>
            <td>
              <FontAwesomeIcon icon={faEdit} />
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => handleDelete(0)}>
                <FaTrash />
              </button>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default Allcatalogs
