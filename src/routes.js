import React from 'react'
import View from './views/pages/View'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Home = React.lazy(() => import('./views/pages/Home/Home'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

//orders
const Pending = React.lazy(() => import('./views/pages/orders/OrderPending'))
const Cancelled = React.lazy(() => import('./views/pages/orders/OrderCancelled'))
const AllOrders = React.lazy(() => import('./views/pages/orders/AllOrders'))

//Details
const Address = React.lazy(() => import('./views/pages/details/adddress/Address'))
const EditAddress = React.lazy(() => import('./views/pages/details/adddress/EditAddress'))
const BankDetails = React.lazy(() => import('./views/pages/details/BankDetails'))

//Verification
const Verification = React.lazy(()=> import('./views/pages/verification/Verification'))

//Products
const AllProducts = React.lazy(() => import('./views/products/Allproducts'))
// const AddCatalog = React.lazy(() => import('./views/products/addcatalogs/AddCatalog'))
// const AddSingleProduct = React.lazy(() => import('./views/products/addcatalogs/AddSingleCatalog'))
const AddBulkProducts = React.lazy(() => import('./views/products/addcatalogs/AddBulkProducts'))
const ProductDetails = React.lazy(() => import('./views/products/addcatalogs/AddProductDetails'))
const EditProduct = React.lazy(()=> import('./views/products/Editproduct'))

//Catalogs
const AllCatalogs = React.lazy(() => import('./views/pages/catalog/AllCatalogs'))
const AddCatalog = React.lazy(() => import('./views/pages/catalog/addcatalogs/AddCatalog'))
const AddSingleCatalog = React.lazy(() => import('./views/pages/catalog/addcatalogs/AddSingleCatalog'))
// const AddBulkProducts = React.lazy(() => import('./views/products/addcatalogs/AddBulkProducts'))
// const ProductDetails = React.lazy(() => import('./views/products/addcatalogs/AddProductDetails'))
const EditCatalog = React.lazy(()=> import('./views/pages/catalog/EditCatalog'))

//rto
const RtoOrders = React.lazy(() => import('./views/pages/rtoorders/RtoOrders'))
//Payments
const Payments = React.lazy(() => import('./views/pages/Payments/Payments'))
//Advertisement
const Advertisement = React.lazy(() => import('./views/pages/advertisement/Advertisement'))
//Notice
const Notice = React.lazy(() => import('./views/pages/notice/Notice'))
//Settings
const Settings = React.lazy(() => import('./views/pages/settings/Settings'))
//Reviews
const Reviews = React.lazy(() => import('./views/pages/reviews/Reviews'))
//Support
const Support = React.lazy(() => import('./views/pages/support/Support'))
//Store
const Store = React.lazy(() => import('./views/pages/store/Store'))
//Media
const Media = React.lazy(() => import('./views/pages/media/Media'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Home', element: Home },
  { path: '/home', name: 'Home', element: Home },
  //orders
  { path: '/orders', name: 'Orders', element: Cards, exact: true },
  { path: '/orders/pending', name: 'Pending', element: Pending },
  { path: '/orders/cancelled', name: 'Cancelled', element: Cancelled },
  { path: '/orders/all', name: 'AllOrders', element: AllOrders },
  { path: '/orders/all/view/:id', name: 'view', element: View },
  //Products
  { path: '/products', name: 'Products', element: Cards, exact: true },
  // { path: '/products/all', name: 'All', element: AllProducts },
  // { path: '/products/all/:id', name: 'Edit Product', element: EditProduct },
  // { path: '/products/add', name: 'Add', element: AddCatalog },
  // { path: '/products/add/single', name: 'Single Product', element: AddSingleProduct },
  // { path: '/products/add/single/product/:id', name: 'Add Details', element: ProductDetails },
  { path: '/products/add/bulk', name: 'Add Bulk Products', element: AddBulkProducts },
  //catalogs
  { path: '/catalogs', name: 'Catalogs', element: Cards, exact: true },
  { path: '/catalogs/all', name: 'All', element: AllCatalogs },
  { path: '/catalogs/all/:id', name: 'Edit Catalog', element: EditCatalog},
  { path: '/catalogs/add', name: 'Add', element: AddCatalog },
  { path: '/catalogs/add/single', name: 'Single Catalog', element: AddSingleCatalog },
  { path: '/catalogs/add/single/catalog/:id', name: 'Add Details', element: ProductDetails },
  // { path: '/catalogs/add/bulk', name: 'Add Bulk Products', element: AddBulkProducts },
  //Details
  { path: '/details', name: 'Details', element: Cards, exact: true },
  { path: '/details/address', name: 'Address', element: Address},
  { path: '/details/address/edit/:id', name: 'Edit', element: EditAddress},
  { path: '/details/bankdetails', name: 'Bank Details', element: BankDetails},
  //rto
  { path: '/rtoorders', name: 'Rto Orders', element: RtoOrders },
  { path: '/rtoorders/view', name: 'view', element: View },
  //Payments
  { path: '/payments', name: 'Payments', element: Payments },
  //advertisement
  { path: '/advertisement', name: 'Advertisement', element: Advertisement },
  //Notice
  { path: '/notice', name: 'Notice', element: Notice },
  //Settings
  { path: '/settings', name: 'Settings', element: Settings },
  //Reviews
  { path: '/reviews', name: 'Reviews', element: Reviews },
  //Support
  { path: '/support', name: 'Support', element: Support },
  //verification
  { path: '/verification', name: 'Verification', element: Verification },
  //store
  { path: '/store', name: 'Store', element: Store },
  //media
  { path: '/media', name: 'Media', element: Media },
]

export default routes
