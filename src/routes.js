// Pages
import Home from './views/Home/Home.jsx'
import Place from './views/Place/Place.jsx'
import FormDist from './views/Place/FormDist.jsx'

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
    path: '/place/newDist',
    name: 'Dist',
    component: FormDist
  },
  {
    redirect: '/'
  },
]

export default Routes