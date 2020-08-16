import React from 'react'
import { connect } from 'react-redux'

// Materia-UI
import {
  Grid
} from '@material-ui/core'

// Core Components
import CardPlace from '../../components/CardPlace'

const newDist = (placeId, history) => {
  history.push(`/place/newDist?place=${placeId}`)
}

const viewPlace = (placeId, history) => {
  history.push(`/place?place=${placeId}`)
}

const renderPlaces = (places, history) => {
  
  if(!places || !places?.length > 0)
    return <h3>Nenhum lugar encontrado.</h3>

  return places.map((place, indice) => {
    console.log(place)
    return (
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <CardPlace 
          title={place.name} 
          onClickPlace={() => viewPlace(indice, history)}
          onClickAdd={() => newDist(indice, history)}
        >
          {place?.menuItems?.length} pratos
        </CardPlace>
      </Grid>
    )
  })
}

const Home = (props) => {

  const { places } = props.place
  
  return (
    <>
      <h1>Lugares</h1>
      <span>{places?.length} lugares cadastrados</span>
      <Grid style={{marginTop: '0.5em'}} container spacing={2}>
        {renderPlaces(places, props.history)}
      </Grid>
    </>
  )
}

const mapStateToProps = ({ place }) => {
  return { place }
}
export default connect(mapStateToProps)(Home)