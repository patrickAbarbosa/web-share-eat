// Pages
import Home from './views/Home/Home.jsx'
import Establishment from './views/Establishment/Establishment.jsx'

const Routes = [  
  {
    exact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/establishment',
    name: 'Establishment',
    component: Establishment
  },
  {
    redirect: '/'
  },
]

export default Routes