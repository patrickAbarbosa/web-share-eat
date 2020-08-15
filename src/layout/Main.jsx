import React from 'react'
import { 
  Route, 
  Redirect, 
  Switch
} from 'react-router-dom'

// Material Ui
import {
  Container
} from '@material-ui/core'

import Routes from '../routes'

// Assets
import logo from '../assets/img/logo.svg'

const styles = {
  companyContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1em',
    paddingBottom: '1em',
    alignItems: 'center'
  }
}

// Routes
const RenderRoutes = () => {
  const routes = Routes.map((route, key) => {
    if(route.redirect)      
      return <Redirect to={route.redirect}  />
    return (
      <Route 
        path={route.path} 
        key={key}
        component={route.component} 
        exact 
      />
    )
  })
  return(
    <Switch>              
      {routes}
    </Switch>
  )    
}

const Main = (props) => {
  console.log()
  return (
    <Container maxWidth='md'>      
      <div style={styles.companyContainer}>
       <img className='company-logo' src={logo} />
      </div>
      <RenderRoutes />
    </Container>
  )
}

export default Main