import React, { useState } from 'react'

function Reviews() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const productsPerPage = 10

  const products = [
    {
      id: 1,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 2,
      refund_reason: 'John',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 4,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 5,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 6,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 7,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 8,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 9,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 10,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 11,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 12,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 1,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 2,
      refund_reason: 'John',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 4,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 5,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 6,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 7,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 8,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
    {
      id: 9,
      refund_reason: 'Hakan',
      amount: '200',
      created: '2',
      method: 40,
      total: '01/02/2024',
      // status: 'pending',
    },
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
  console.log('currentProducts', currentProducts)

  return (
    <div>
      <div className="rounded bg-white p-4 shadow md:p-8 mb-8 flex flex-col">
        <div className="flex w-full items-center">
          <h2 className=" relative text-lg font-semibold text-heading ">Reviews</h2>
        </div>
      </div>
      <div className="mb-8 rounded-lg bg-white bg-light -3 md:p-8">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Id
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Customer Review
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Ratings
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Reports
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Date
                </th>
                {/* <th scope="col" className="px-6 py-3 text-center">
                  Actions
                </th> */}
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
                  <td className="px-6 py-4 text-center">{product.refund_reason}</td>
                  <td className="px-6 py-4 text-center">{product.amount}</td>
                  <td className="rc-table-cell cursor-pointer" style={{textAlign: 'center'}}>
                    <div className="inline-flex shrink-0 items-center rounded-full border border-accent px-3 py-0.5 text-base text-accent">
                      {product.created}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25.056 24"
                        className="h-3 w-3 ms-1"
                      >
                        <g data-name="Group 36413" fill="green">
                          <path
                            id="Path_22667"
                            data-name="Path 22667"
                            d="M19.474,34.679l-6.946-4.346L5.583,34.679a.734.734,0,0,1-1.1-.8L6.469,25.93.263,20.668a.735.735,0,0,1,.421-1.3l8.1-.566,3.064-7.6a.765.765,0,0,1,1.362,0l3.064,7.6,8.1.566a.735.735,0,0,1,.421,1.3L18.588,25.93l1.987,7.949a.734.734,0,0,1-1.1.8Z"
                            transform="translate(0 -10.792)"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{product.method}</td>
                  <td className="px-6 py-4 text-center">{product.total}</td>

                  {/* <td className="rc-table-cell" style={{ textAlign: 'center' }}>
                    <div className="inline-flex items-center w-auto gap-3">
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
                  </td> */}
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
  )
}

export default Reviews
