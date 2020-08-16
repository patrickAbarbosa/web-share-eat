import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Materia-UI
import {
  Grid
} from '@material-ui/core'

// Core Components
import CardMenuItem from '../../components/CardMenuItem'

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
  console.log(props)
  return (
    search?.place ?
    <>
      <h1>{places[search.place]?.name}</h1>
      <span>{places[search.place]?.menuItems?.length} pratos</span>
      <Grid style={{marginTop: '0.5em'}} container spacing={2}>
        {renderMenu(places[search.place]?.menuItems)}
      </Grid>
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