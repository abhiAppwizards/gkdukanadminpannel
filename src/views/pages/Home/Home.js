import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './homeComponents/Card'
import { svg1, svg2, svg3, svg4, svg5, svg6, svg7 } from './homeComponents/SVGComponent'
import config from 'src/config'

function MyComponent() {
  // const [amounts, setAmounts] = useState([]);
  const token = localStorage.getItem('vendorToken')
  const [summary, setSummary] = useState({})
  const [status, setStatus] = useState({})
  const [topProducts, setTopProducts] = useState([])

  const cardWidth = '270px'

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [summaryResponse, statusResponse, topProductsResponse] = await Promise.all([
        axios.get(`${config.baseURL}/vendor/home/statistics`, {
          headers: { authorization: token },
        }),
        axios.get(`${config.baseURL}/vendor/home/orders/statuses`, {
          headers: { authorization: token },
        }),
        axios.get(`${config.baseURL}/vendor/home/top-performing`, {
          headers: { authorization: token },
        }),
      ])

      setSummary(summaryResponse.data)
      setStatus(statusResponse.data)
      // console.log('statusResponse', statusResponse.data)
      // console.log('summaryResponse', summaryResponse.data)
      // console.log('topProductsResponse', topProductsResponse.data)
      setTopProducts(topProductsResponse.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <>
      <div className="mb-8 rounded-lg bg-white bg-light -3 md:p-8">
        <div className="mb-3 items-center justify-between md:mb-7">
          <h3 className="before:content-'' relative mt-1 bg-white text-lg font-semibold text-heading before:absolute before:-top-px before:h-7 before:w-1 before:rounded-tr-md before:rounded-br-md before:bg-accent ltr:before:-left-6 rtl:before:-right-6 md:before:-top-0.5 md:ltr:before:-left-7 md:rtl:before:-right-7 lg:before:h-8">
            Summary
          </h3>
        </div>
        <div className="flex justify-between">
          <Card
            title="Total Revenue"
            svg={svg1}
            width={cardWidth}
            totalCount={summary.totalRevenue}
          />
          <Card title="Total Order" svg={svg2} width={cardWidth} totalCount={summary.totalOrders} />
          <Card
            title="All Vendors"
            svg={svg3}
            width={cardWidth}
            totalCount={summary.totalVendors}
          />
          <Card
            title="Total Products"
            svg={svg4}
            width={cardWidth}
            totalCount={summary.totalProducts}
          />
          {/* <Card amount={amounts[0]} title="Title 1" svg={svg1} />
          <Card amount={amounts[1]} title="Title 2" svg={svg2} />
          <Card amount={amounts[2]} title="Title 3" svg={svg3} />
          <Card amount={amounts[3]} title="Title 4" svg={svg4} /> */}
        </div>
      </div>

      {/* Orders Section */}
      <div className="mb-8 rounded-lg bg-white bg-light -3 md:p-8">
        <div className="mb-3 items-center justify-between sm:flex md:mb-7">
          <div className="mb-3 items-center justify-between md:mb-7">
            <h3 className="before:content-'' relative mt-1 bg-white text-lg font-semibold text-heading before:absolute before:-top-px before:h-7 before:w-1 before:rounded-tr-md before:rounded-br-md before:bg-accent ltr:before:-left-6 rtl:before:-right-6 md:before:-top-0.5 md:ltr:before:-left-7 md:rtl:before:-right-7 lg:before:h-8">
              Order Status
            </h3>
          </div>
          {/* <div className="mt-3.5 inline-flex rounded-full bg-gray-100/80 p-1.5 sm:mt-0">
            <div className="relative">
              <button
                data-variant="custom"
                className="inline-flex items-center justify-center flex-shrink-0 outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 py-0  !focus:ring-0 relative z-10 !h-7 rounded-full !px-2.5 text-sm font-medium text-accent"
                type="button"
              >
                Today
              </button>
              <div className="absolute bottom-0 left-0 right-0 z-0 h-full rounded-3xl bg-accent/10"></div>
            </div>
            <div className="relative">
              <button
                data-variant="custom"
                className="inline-flex items-center justify-center flex-shrink-0 outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 py-0  !focus:ring-0 relative z-10 !h-7 rounded-full !px-2.5 text-sm font-medium text-gray-500"
                type="button"
              >
                Weekly
              </button>
            </div>
            <div className="relative">
              <button
                data-variant="custom"
                className="inline-flex items-center justify-center flex-shrink-0 outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 py-0  !focus:ring-0 relative z-10 !h-7 rounded-full !px-2.5 text-sm font-medium text-gray-500"
                type="button"
              >
                Monthly
              </button>
            </div>
            <div className="relative">
              <button
                data-variant="custom"
                className="inline-flex items-center justify-center flex-shrink-0 outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 py-0  !focus:ring-0 relative z-10 !h-7 rounded-full !px-2.5 text-sm font-medium text-gray-500"
                type="button"
              >
                Yearly
              </button>
            </div>
          </div> */}
        </div>
        <div className="flex justify-between">
          <Card title="Pending Orders" svg={svg5} width={cardWidth} totalCount={status.pendingPaymentOrders} />
          <Card title="Processing Order" svg={svg6} width={cardWidth} totalCount={status.processingOrders}/>
          <Card title="Completed Order" svg={svg7} width={cardWidth} totalCount={status.completedOrders}/>
          <Card title="Cancelled Order" svg={svg1} width={cardWidth} totalCount={status.canceledOrders}/>
        </div>
      </div>

      <div className="mb-8 rounded-lg bg-white bg-light -3 md:p-8">
        <h1 className="font-bold text-xl mb-4"> Top 10 products</h1>
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
                  Available Unit
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Weight
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  MRP
                </th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 text-center py-4">{product._id}</td>
                  <td className="px-6 text-center py-4">{product.name}</td>
                  <td className="px-6 text-center py-4">{product.sku}</td>
                  <td className="px-6 text-center py-4">{product.description}</td>
                  <td className="px-6 text-center py-4">{product.weight}</td>
                  <td className="px-6 text-center py-4">{product.mrp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MyComponent
