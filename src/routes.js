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

//Catalogs
const AllCatalogs = React.lazy(() => import('./views/catalogs/Allcatalogs'))
const AddCatalog = React.lazy(() => import('./views/catalogs/addcatalogs/Addcatalog'))
const AddSingleProduct = React.lazy(() => import('./views/catalogs/addcatalogs/AddSingleProduct'))
const AddBulkProducts = React.lazy(() => import('./views/catalogs/addcatalogs/AddBulkProducts'))
const CatalogDetails = React.lazy(() => import('./views/catalogs/addcatalogs/CatalogDetails'))

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

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Home', element: Home },
  { path: '/home', name: 'Home', element: Home },
  //orders
  { path: '/orders', name: 'Orders', element: Cards, exact: true },
  { path: '/orders/pending', name: 'Pending', element: Pending },
  { path: '/orders/cancelled', name: 'Cancelled', element: Cancelled },
  { path: '/orders/all', name: 'AllOrders', element: AllOrders },
  { path: '/orders/all/view', name: 'view', element: View },
  //Catalogs
  { path: '/catalogs', name: 'Catalogs', element: Cards, exact: true },
  { path: '/catalogs/all', name: 'All', element: AllCatalogs },
  { path: '/catalogs/add', name: 'Add', element: AddCatalog },
  { path: '/catalogs/add/single', name: 'Single Product', element: AddSingleProduct },
  { path: '/catalogs/add/single/catalog', name: 'Add Details', element: CatalogDetails },
  { path: '/catalogs/add/bulk', name: 'Add Bulk Products', element: AddBulkProducts },
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
]

export default routes
