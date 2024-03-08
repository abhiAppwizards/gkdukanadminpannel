import React, { useEffect, useState } from 'react'
import config from 'src/config'
import axios from 'axios'
import { Link } from 'react-router-dom'
import VendorView from './vendorView'

const AllVendors = ({}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [vendors, setVendores] = useState([])
  const [selectedVendorId, setSelectedVendorId] = useState(null)
  const [isVendorViewOpen, setIsVendorViewOpen] = useState(false)
  const vendorsPerPage = 10

  useEffect(() => {
    AllVendors()
  }, [])

  const AllVendors = async () => {
    try {
      const response = await axios.get(`${config.baseURL}/admin/vendor`)
      console.log('vendor get', response.data)
      setVendores(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleIconClick = (vendorId) => {
    setSelectedVendorId(vendorId)
    setIsVendorViewOpen(true)
  }

  const totalPages = Math.ceil(vendors.length / vendorsPerPage)
  const handleClick = (type) => {
    if (type === 'prev') {
      setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
    } else if (type === 'next') {
      setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)
    }
  }

  const renderPageNumbers = () => {
    let pages = []
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1) ||
        (i === currentPage - 2 && currentPage > 2) ||
        (i === currentPage + 2 && currentPage < totalPages - 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 rounded-full mx-1 focus:outline-none ${
              currentPage === i ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'
            }`}
          >
            {i}
          </button>,
        )
      } else if (i === currentPage - 3 || i === currentPage + 3) {
        pages.push(
          <span key={i} className="mx-1">
            ...
          </span>,
        )
      }
    }
    return pages
  }

  const indexOfLastProduct = currentPage * vendorsPerPage
  const indexOfFirstProduct = indexOfLastProduct - vendorsPerPage
  const currentvendors = vendors.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className="">
      <div className="rounded bg-white p-4 shadow md:p-8 mb-8 flex flex-row items-center justify-between">
        <div className="md:w-1/4">
          <h2 className=" relative text-lg font-semibold text-heading ">All Vendors</h2>
        </div>
      </div>
      <div className="mb-8 rounded-lg bg-white bg-light -3 md:p-8">
        <h1 className="font-bold text-xl mb-4"> Your All Vendors:-</h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Vendors IDs
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Account Status
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Store Name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentvendors.map((vendor) => (
                <tr
                  key={vendor._id}
                  className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800  dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {vendor._id}
                  </th>
                  <td className="text-center">
                    <div className="flex justify-center items-center rtl:space-x-reverse">
                      <span className="inline-block px-3 text-center py-1.5 rounded bg-red-600 text-xs whitespace-nowrap relative font-medium text-dark bg-accent bg-opacity-10 !text-accent capitalize">
                        {vendor.account_status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{vendor.email}</td>
                  <td className="px-6 py-4 text-center">{vendor.phoneNumber}</td>
                  <td className="px-6 py-4 text-center">{vendor.store_name}</td>
                  <td className="rc-table-cell" style={{ textAlign: 'center' }}>
                    <div className="inline-flex items-center w-auto gap-3">
                      <button onClick={() => handleIconClick(vendor._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          width="18"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <VendorView
                isOpen={isVendorViewOpen}
                onClose={() => setIsVendorViewOpen(false)}
                vendorId={selectedVendorId}
              />
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handleClick('prev')}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-full mx-1 focus:outline-none ${
              currentPage === 1
                ? 'opacity-50 cursor-not-allowed'
                : 'text-blue-500 hover:bg-blue-200'
            }`}
          >
            Prev
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handleClick('next')}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-full mx-1 focus:outline-none ${
              currentPage === totalPages
                ? 'opacity-50 cursor-not-allowed'
                : 'text-blue-500 hover:bg-blue-200'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default AllVendors
