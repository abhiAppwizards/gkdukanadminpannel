import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilCreditCard,
  cilBell,
  cilList,
  cilFile,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Orders',
    to: '/orders',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Orders',
        to: '/orders/all',
      },
      {
        component: CNavItem,
        name: 'Pending Orders',
        to: '/orders/pending',
      },
      {
        component: CNavItem,
        name: 'Cancelled Orders',
        to: '/orders/cancelled',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Return/RTO Orders',
    to: '/rtoorders',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/products',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Products',
        to: '/products/all',
      },
      {
        component: CNavItem,
        name: 'Add Product',
        to: '/products/add',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Payments',
    to: '/payments',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notice',
    to: '/notice',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reviews',
    to: '/reviews',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Details',
    to: '/details',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bank Details',
        to: '/details/bankdetails',
      },
      {
        component: CNavItem,
        name: 'Address',
        to: '/details/address',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
