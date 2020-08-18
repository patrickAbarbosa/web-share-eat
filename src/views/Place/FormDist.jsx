import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Materia-UI
import {
  IconButton,
  Snackbar
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { NavigateBefore } from '@material-ui/icons'

// Core Components
import Input from '../../components/Input'

// Actions 
import { query } from '../../utils/functions'

const renderForm = (props) => {  
  return (
    <form>
        <div>
          <Input
            label='Nome do prato'
            placeholder='Prato'
            type='text'
            onChangeText={e => props.setName(e)}
            value={props.name}
          />
        </div>
        <div>
          <Input
            label='Valor'
            placeholder='0,00'
            type='money'
            onChangeText={e => props.setPrice(e)}
            value={props.price}
          />
        </div>
        <div>
          <Input
            label='Descrição do prato'
            placeholder='Insira uma descrição'
            type='textarea'
            rows={4}
            onChangeText={e => props.setDescription(e)}
            value={props.description}
          />
          <span>*A descrição deve conter até 200 caracteres.</span>
        </div>
        <button className='button' onClick={e => props.save(e)} style={{marginTop: '3.5em'}}>Salvar</button>
    </form>
  )
}

// Render feedback save dist
const RenderFeedBack = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
} 

const initial_feedback = {open: false, severity: 'info',  message: ''}

const FormDist = (props) => {
  const [search, setSearch] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [feedback, setFeedback] = useState(initial_feedback)

  const { places } = props.place
  
  useEffect(() => {
    setSearch(query(props.location))
  }, [])

  const save = (e) =>{
    e.preventDefault()
    if(name == '' || name.length < 3)
      return setFeedback({open: true, message: 'Nome inválido!', severity: 'error' })
    
    const ammount = parseFloat(price.replace('R$', '').replace('.', '').replace(',', '.'))
    
    if(ammount == NaN || ammount <= 0)
      return setFeedback({open: true, message: 'Preço inválido', severity: 'error' })

      
  }
  console.log({price, name, description})
  return (
    search?.place ?
    <>
      <div style={{position: 'absolute', top: '0.5em', marginLeft: '-1em'}}>
        <IconButton aria-label="Ver mais" onClick={() => props.history.goBack()}>
          <NavigateBefore fontSize="large" />
        </IconButton>
      </div>
  
      <h1>{places[search.place]?.name}</h1>
      
      {renderForm({ name, setName, price, setPrice, description, setDescription, save })}
      <Snackbar open={feedback.open} autoHideDuration={6000} onClose={() => setFeedback(initial_feedback)}>
        <RenderFeedBack onClose={() => setFeedback(initial_feedback)} severity={feedback.severity}>
          {feedback.message}
        </RenderFeedBack>
      </Snackbar>
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