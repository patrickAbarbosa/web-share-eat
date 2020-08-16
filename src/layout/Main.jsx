import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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

// Actions
import { getPlaces } from '../store/actions.js'

const styles = {
  companyContainer: { 
    paddingTop: '1em',
    paddingBottom: '1em',
    textAlign: 'center'
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
  useEffect(() => {
    props.getPlaces()
  }, [])

  return (
    <Container maxWidth='md'>      
      <div style={styles.companyContainer}>
        <img className='company-logo' src={logo} />
      </div>
      <RenderRoutes />
    </Container>
  )
}

const mapStateToProps = ({ place }) => {
  return { place }
}
export default connect(mapStateToProps, { 
  getPlaces 
})(Main)