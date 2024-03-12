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
  // {
  //   component: CNavGroup,
  //   name: 'Catalogs',
  //   to: '/catalogs',
  //   icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'All Catalogs',
  //       to: '/catalogs/all',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Add Product',
  //       to: '/catalogs/add',
  //     },
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Categories',
    to: '/categories',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Categories',
        to: '/categories/all',
      },
      {
        component: CNavItem,
        name: 'Add Category',
        to: '/categories/add',
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Attributes',
  //   to: '/attributes',
  //   icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'All Attributes',
  //       to: '/attributes/all',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Attribute',
  //       to: '/attributes/add',
  //     },
  //   ],
  // },
  {
    component: CNavItem,
    name: 'Attributes',
    to: '/attributes',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Vendors',
    to: '/vendors',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Vendors',
        to: '/vendors/all',
      },
      {
        component: CNavItem,
        name: 'Add Vendor',
        to: '/vendors/add',
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
    component: CNavItem,
    name: 'Support',
    to: '/support',
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
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Bank Details',
  //       to: '/details/bankdetails',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Address',
  //       to: '/details/address',
  //     },
  //   ],
  // },
]

export default _nav
