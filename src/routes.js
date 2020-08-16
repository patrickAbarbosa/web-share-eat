// Pages
import Home from './views/Home/Home.jsx'
import Place from './views/Place/Place.jsx'

const Routes = [  
  {
    exact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/place',
    name: 'Place',
    component: Place
  },
  {
    redirect: '/'
  },
]

export default Routes