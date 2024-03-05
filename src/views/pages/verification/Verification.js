import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CSpinner } from '@coreui/react';
import { useNavigate } from 'react-router-dom'
import config from 'src/config';

function VerificationDetails() {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [verificationData, setVerificationData] = useState(null);
  const [formData, setFormData] = useState({
    bank_name: '',
    account_number: '',
    ifsc_code: '',
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('vendorToken');

  useEffect(() => {
    setLoading(true);
    getVerificationData();
  }, []);

  const getVerificationData = async () => {
    try {
      const response = await axios.get(`${config.baseURL}/vendor/settings/documents`, {
        headers: {
          authorization: token,
        },
      });
      setVerificationData(response.data);
      if (response.data) {
        setFormData({
          bank_name: response.data.bank_name || '',
          account_number: response.data.account_number || '',
          ifsc_code: response.data.ifsc_code || '',
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error while fetching bank details:', error);
    }
  };

  const handleSubmit = async () => {
    setButtonLoading(true);
    try {
      if (verificationData) {
        await axios.put(`${config.baseURL}/vendor/settings/documents`,
          formData,
          {
            headers: {
              authorization: token,
            },
          }
        );
        toast.success('Bank details updated successfully');
      } else {
        await axios.post(`${config.baseURL}/vendor/settings/documents`, formData, {
          headers: {
            authorization: token,
          },
        });
        toast.success('Bank details added successfully');
      }
    } catch (error) {
      toast.error('Failed to update bank details');
      // console.error('Error while updating bank details:', error);
    } finally {
      setButtonLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {loading ? (
        <CSpinner className="text-blue-600" />
      ) : (
        <div>
          <ToastContainer />
          <div className="rounded bg-white p-4 shadow md:p-8 mb-8 flex flex-row items-center justify-between">
            <div className="md:w-1/4">
              <h2 className="relative text-lg font-semibold text-heading">Bank Details</h2>
            </div>
          </div>
          <div className="rounded p-4 shadow md:p-8 mb-8 bg-white justify-between">
            <div className="border w-full mt-4 p-2 rounded-md">
              <table className="table-auto">
                <tbody>
                  {/* {verificationData && ( */}
                    <>
                      <tr>
                        <td className="font-semibold pl-2 pr-32">Bank Name :</td>
                        <td className="pl-4">
                          <input
                            className="w-full lg:w-80 px-2 py-1 border border-gray-300 rounded focus:outline-blue-400"
                            value={formData.bank_name}
                            type="text"
                            name="bank_name"
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold pl-2 pr-32">Account Number :</td>
                        <td className="pl-4">
                          <input
                            className="w-full lg:w-80 px-2 py-1 mt-2 border border-gray-300 rounded focus:outline-blue-400"
                            value={formData.account_number}
                            type="text"
                            name="account_number"
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold pl-2 pr-32">IFSC Code :</td>
                        <td className="pl-4">
                          <input
                            className="w-full lg:w-80 px-2 py-1 mt-2 border border-gray-300 rounded focus:outline-blue-400"
                            value={formData.ifsc_code}
                            type="text"
                            name="ifsc_code"
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                    </>
                  {/* )} */}
                </tbody>
              </table>
            </div>
            <button
              className={`border p-1 w-24 rounded-md mt-4 ${
                buttonLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-slate-200 hover:bg-slate-100'
              } font-normal`}
              onClick={handleSubmit}
              disabled={buttonLoading}
            >
              {verificationData ? 'Save' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default VerificationDetails;
