import React from 'react'

function BankDetails() {
  return (
    <>
      <div className="rounded bg-white p-4 shadow md:p-8 mb-8 flex flex-row items-center justify-between">
        <div className="md:w-1/4">
          <h2 className=" relative text-lg font-semibold text-heading ">Bank Details</h2>
        </div>
          <div>
            <button
              // onClick={handleShow}
              className="border p-2 rounded-md bg-slate-200 hover:bg-slate-100 font-normal"
            >
              Add your Bank Details
            </button>
          </div>
      </div>
    </>
  )
}

export default BankDetails
