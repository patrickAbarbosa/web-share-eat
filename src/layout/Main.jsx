import React from 'react'

// Material Ui
import {
  Container
} from '@material-ui/core'


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
const Main = () => {
  return (
    <Container maxWidth='md'>      
      <div style={styles.companyContainer}>
       <img className='company-logo' src={logo} />
      </div>
    </Container>
  )
}

export default Main