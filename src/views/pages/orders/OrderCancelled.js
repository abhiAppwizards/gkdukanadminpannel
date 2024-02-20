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
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10

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

  //table code here......
  const products = [
    { id: 1, name: 'Hakan', type: 'Akgul', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 2, name: 'John', type: 'Smith', price: 4, quantity: 40, status: 'Cancelled' },
    { id: 4, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 5, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 6, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 7, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 8, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 9, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 10, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 11, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 12, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 1, name: 'Hakan', type: 'Akgul', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 2, name: 'John', type: 'Smith', price: 4, quantity: 40, status: 'Cancelled' },
    { id: 4, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 5, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 6, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 7, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 8, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 9, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 10, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 11, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 12, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 1, name: 'Hakan', type: 'Akgul', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 2, name: 'John', type: 'Smith', price: 4, quantity: 40, status: 'Cancelled' },
    { id: 4, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 5, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 6, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 7, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 8, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 9, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 10, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 11, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 12, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 1, name: 'Hakan', type: 'Akgul', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 2, name: 'John', type: 'Smith', price: 4, quantity: 40, status: 'Cancelled' },
    { id: 4, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 5, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 6, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 7, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 8, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 9, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 10, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 11, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
    { id: 12, name: 'Hakan', type: 'Akgül', price: 22, quantity: 40, status: 'Cancelled' },
  ]

  const totalPages = Math.ceil(products.length / productsPerPage)
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

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <>
      <div className="rounded bg-white p-4 shadow md:p-8 mb-8 flex flex-col">
        <div className="flex w-full flex-col items-center md:flex-row">
          <div className=" md:mb-0 md:w-1/4">
            <h2 className="before:content-'' relative text-lg font-semibold text-heading before:absolute before:-top-0.5 before:h-8 before:rounded-tr-md before:rounded-br-md before:bg-accent ltr:before:-left-8 rtl:before:-right-8 md:before:w-1">
              Cancelled Orders
            </h2>
          </div>
          <div className="flex w-full flex-col items-center ms-auto md:w-2/4">
            <form noValidate="" role="search" className="relative flex w-full items-center">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <button className="absolute top-1/2 -translate-y-1/2 p-2 text-body outline-none start-1 focus:outline-none active:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
              <input
                type="text"
                id="search"
                name="searchText"
                className="ps-10 pe-4 h-12 flex items-center w-full rounded-md appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent"
                placeholder="Search by Name"
                aria-label="Search"
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </div>
      {/* <Row>
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
      </Row> */}

      <div>
        {/* <Form.Label>Search Pending Products</Form.Label> */}
        <Row className="mb-3">
          {/* <Col>
            <Form.Group>
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
          </Col> */}
        </Row>
        <div className="mb-8 rounded-lg bg-white bg-light -3 md:p-8">
          <h1 className="font-bold text-xl mb-4"> Your All Cancelled Orders Here..</h1>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    Product ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Product Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800  dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.id}
                    </th>
                    <td className="px-6 py-4 text-center">{product.name}</td>
                    <td className="px-6 py-4 text-center">{product.type}</td>
                    <td className="px-6 py-4 text-center">{product.quantity}</td>
                    <td className="px-6 py-4 text-center">{product.price}</td>
                    <td className="text-center">
                      <div className="flex justify-center items-center rtl:space-x-reverse">
                        <span className="inline-block px-3 text-center py-1.5 rounded bg-red-600 text-xs whitespace-nowrap relative font-medium text-dark bg-accent bg-opacity-10 !text-accent capitalize">
                          {product.status}
                        </span>
                      </div>
                    </td>

                    <td className="rc-table-cell" style={{ textAlign: 'center' }}>
                      <div className="inline-flex items-center w-auto gap-3">
                        <a
                          title="Edit"
                          className="text-base transition duration-200 hover:text-heading"
                          href="/products/ava-juice-macha-tea/edit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20.547 20.299"
                            fill="currentColor"
                            width="15"
                          >
                            <g stroke="currentColor" strokeWidth=".4">
                              <path
                                data-name="Path 78"
                                d="M18.659 12.688a.5.5 0 00-.5.5v4.423a1.5 1.5 0 01-1.494 1.494H2.691A1.5 1.5 0 011.2 17.609V4.629a1.5 1.5 0 011.494-1.494h4.419a.5.5 0 100-1H2.691A2.493 2.493 0 00.2 4.629v12.98A2.493 2.493 0 002.691 20.1h13.976a2.493 2.493 0 002.491-2.491v-4.423a.5.5 0 00-.5-.5zm0 0"
                              ></path>
                              <path
                                data-name="Path 79"
                                d="M18.96.856a2.241 2.241 0 00-3.17 0L6.899 9.739a.5.5 0 00-.128.219l-1.169 4.219a.5.5 0 00.613.613l4.219-1.169a.5.5 0 00.219-.128l8.886-8.887a2.244 2.244 0 000-3.17zm-10.971 9.21l7.273-7.273 2.346 2.346-7.273 7.273zm-.469.94l1.879 1.875-2.592.718zm11.32-7.1l-.528.528-2.346-2.345.528-.528a1.245 1.245 0 011.761 0l.585.584a1.247 1.247 0 010 1.761zm0 0"
                              ></path>
                            </g>
                          </svg>
                        </a>
                        <button
                          className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none"
                          title="Delete"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19.4 22.169"
                            fill="currentColor"
                            width="14"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.4"
                            >
                              <path
                                data-name="Rectangle 2"
                                d="M8.238.7h2.923a2 2 0 012 2v.769h0-6.923 0V2.7a2 2 0 012-2z"
                              ></path>
                              <path data-name="Line 1" d="M.7 3.469h18"></path>
                              <path
                                data-name="Path 77"
                                d="M14.649 21.469h-9.9a1.385 1.385 0 01-1.38-1.279L2.085 3.469h15.231L16.029 20.19a1.385 1.385 0 01-1.38 1.279z"
                              ></path>
                              <path data-name="Line 2" d="M7.623 6.238V18.7"></path>
                              <path data-name="Line 3" d="M11.777 6.238V18.7"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
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
    </>
  )
}

export default OrderCancelled
