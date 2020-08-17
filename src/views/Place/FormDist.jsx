import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Materia-UI
import {
  IconButton
} from '@material-ui/core'

import { NavigateBefore } from '@material-ui/icons'

// Core Components
import Input from '../../components/Input'

// Actions 
import { query } from '../../utils/functions'

const renderForm = () => {
  return (
    <form>
        <div>
          <Input
            label='Nome do prato'
            placeholder='Prato'
            type='text'
          />
        </div>
        <div>
          <Input
            label='Valor'
            placeholder='0,00'
            type='money'
          />
        </div>
        <div>
          <Input
            label='Valor'
            placeholder='Insira uma descrição'
            type='textarea'
            rows={4}
          />
          <span>*A descrição deve conter até 200 caracteres.</span>
        </div>
        <button className='button' style={{marginTop: '3.5em'}}>Salvar</button>
    </form>
  )
}

const FormDist = (props) => {
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
      
      {renderForm()}
  
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
export default connect(mapStateToProps)(FormDist)