import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import { cilUser } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Add validation logic here

    // Assuming the API endpoint for forgot password is 'http://localhost:3000/vendors/auth/forgot-password'
    fetch('http://localhost:3000/vendors/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response as needed, e.g., show success message
        // Optionally, you can navigate the user to a success or confirmation page
      })
      .catch((error) => {
        console.error('Forgot password error:', error);
        // Handle and display error to the user
      });
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Forgot Password</h1>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={12}>
                      <CButton color="primary" className="px-4" onClick={handleForgotPassword}>
                        Send Reset Link
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ForgotPassword;
