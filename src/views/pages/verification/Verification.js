import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CSpinner } from '@coreui/react';
import { useNavigate } from 'react-router-dom'
import config from 'src/config';

function BankDetails() {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [bankData, setBankData] = useState(null);
  const [formData, setFormData] = useState({
    ID_number: '',
    type: '',
    status: '',
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('vendorToken');

  useEffect(() => {
    setLoading(true);
    getBankDetails();
  }, []);

  const getBankDetails = async () => {
    try {
      const response = await axios.get(`${config.baseURL}/vendor/settings/documents`, {
        headers: {
          authorization: token,
        },
      });
      // console.log('get veryficationDetails', response.data);
      setBankData(response.data);
      if (response.data) {
        setFormData({
          ID_number: response.data.ID_number || '',
          type: response.data.type || '',
          status: response.data.status || '',
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
      if (bankData) {
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
      console.error('Error while updating bank details:', error);
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
              <h2 className="relative text-lg font-semibold text-heading">Verify Your Documents</h2>
            </div>
          </div>
          <div className="rounded p-4 shadow md:p-8 mb-8 bg-white justify-between">
            <div className="border w-full mt-4 p-2 rounded-md">
              <table className="table-auto">
                <tbody>
                  {/* {bankData && ( */}
                    <>
                      <tr>
                        <td className="font-semibold pl-2 pr-32">Id Number :</td>
                        <td className="pl-4">
                          <input
                            className="w-full lg:w-80 px-2 py-1 border border-gray-300 rounded focus:outline-blue-400"
                            value={formData.ID_number}
                            type="text"
                            name="ID_number"
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold pl-2 pr-32">Document Type :</td>
                        <td className="pl-4">
                          <input
                            className="w-full lg:w-80 px-2 py-1 mt-2 border border-gray-300 rounded focus:outline-blue-400"
                            value={formData.type}
                            type="text"
                            name="type"
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold pl-2 pr-32">Vender Status :</td>
                        <td className="pl-4">
                          <input
                            className="w-full lg:w-80 px-2 py-1 mt-2 border border-gray-300 rounded focus:outline-blue-400"
                            value={formData.status}
                            type="text"
                            name="status"
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
              {bankData ? 'Save' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BankDetails;
