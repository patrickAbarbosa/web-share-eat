import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Materia-UI
import {
  Grid,
  IconButton
} from '@material-ui/core'

import { AddCircle, NavigateBefore } from '@material-ui/icons'

// Core Components
import CardMenuItem from '../../components/CardMenuItem'
import env from '../../env'

// Actions 
import { query } from '../../utils/functions'

const renderMenu = (menu, history) => {
  
  if(!menu || !menu?.length > 0)
    return <h3>Nenhum item encontrado.</h3>

  return menu.map((item, indice) => {
    return (
      <Grid item xs={12} sm={6} md={4} >
        <CardMenuItem title={item.name} price={item.price}>
          {item?.description}
        </CardMenuItem>
      </Grid>
    )
  })
}

const Place = (props) => {
  const [search, setSearch] = useState(null)
  const { places } = props.place
  
  useEffect(() => {
    setSearch(query(props.location))
  }, [])
  
  return (
    search?.place ?
    <>
      <div style={{position: 'absolute', top: '0.5em', marginLeft: '-1em'}}>
        <IconButton aria-label="Ver mais" onClick={() => props.history.goBack()}>
          <NavigateBefore fontSize="large" />
        </IconButton>
      </div>

      <h1>{places[search.place]?.name}</h1>
      <span>{places[search.place]?.menuItems?.length} pratos</span>
      
      <Grid style={{marginTop: '0.5em'}} container spacing={2}>
        {renderMenu(places[search.place]?.menuItems)}
      </Grid>
      
      <div style={{position: 'absolute', bottom: '0.5em', right: '0.5em'}}>
        <IconButton aria-label="Ver mais" onClick={() => props.history.push(`/place/newDist?place=${search.place}`)}>
          <AddCircle fontSize="large"  style={{ color: env.colors.primary, fontSize: '2.5em'}} />
        </IconButton>
      </div>
    </>
    : 
    <>
      Lugar não encontrado.
    </>
  )
}

const mapStateToProps = ({ place }) => {
  return { place }
}
export default connect(mapStateToProps, {

})(Place)